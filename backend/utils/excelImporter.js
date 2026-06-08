import xlsx from 'xlsx';
import Verification from '../models/Verification.js';

const normalizeValue = (value) => {
  if (value === null || value === undefined) return '';
  return value.toString().trim();
};

const normalizeKey = (key) => key.toString().trim().toLowerCase();

const buildRecord = (row) => {
  const normalized = {};
  for (const [rawKey, rawValue] of Object.entries(row)) {
    normalized[normalizeKey(rawKey)] = normalizeValue(rawValue);
  }

  const candidateName = normalized['candidate name'];
  const fatherName = normalized['father name'];
  const verificationReference = normalized['verification reference'];
  const course = normalized['course'];
  const courseDuration = normalized['course duration'];
  const trainingSession = normalized['training session'];
  const trainerName = normalized['trainer name'];
  const finalGrade = normalized['final grade'] || '';

  if (!candidateName || !verificationReference) {
    return null;
  }

  return {
    candidateName,
    fatherName,
    verificationReference: verificationReference.toLowerCase(),
    course,
    courseDuration,
    trainingSession,
    trainerName,
    finalGrade,
    certificateImage: '',
    certificatePdf: '',
  };
};

export const importExcelRecords = async (filePath) => {
  const workbook = xlsx.readFile(filePath, { cellDates: true });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rows = xlsx.utils.sheet_to_json(worksheet, { defval: '' });

  const report = { totalRows: rows.length, imported: 0, updated: 0, failed: 0 };

  for (const row of rows) {
    const record = buildRecord(row);
    if (!record) {
      report.failed += 1;
      continue;
    }

    const searchQuery = {
      verificationReference: record.verificationReference,
    };

    const existing = await Verification.findOne(searchQuery);
    if (existing) {
      await Verification.findByIdAndUpdate(existing._id, record, { new: true });
      report.updated += 1;
    } else {
      await Verification.create(record);
      report.imported += 1;
    }
  }

  return report;
};
