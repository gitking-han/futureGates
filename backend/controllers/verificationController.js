import fs from 'fs';
import path from 'path';
import Verification from '../models/Verification.js';
import { importExcelRecords } from '../utils/excelImporter.js';
import { buildVerificationTemplate } from '../utils/excelTemplateGenerator.js';

export const uploadExcel = async (req, res) => {
  if (!req.file?.path) {
    return res.status(400).json({ message: 'Excel file is required' });
  }

  try {
    const report = await importExcelRecords(req.file.path);
    fs.unlink(req.file.path, () => {});
    return res.json(report);
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Unable to import Excel file' });
  }
};

export const downloadTemplate = (req, res) => {
  const templateBuffer = buildVerificationTemplate();
  res.setHeader(
    'Content-Disposition',
    'attachment; filename="verification-template.xlsx"'
  );
  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
  res.send(templateBuffer);
};

export const createVerification = async (req, res) => {
  const {
    candidateName,
    fatherName,
    verificationReference,
    course,
    courseDuration,
    trainingSession,
    trainerName,
    finalGrade,
    certificateImage,
    certificatePdf,
  } = req.body;

  if (!candidateName || !fatherName || !verificationReference) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  const normalizedReference = verificationReference.trim().toLowerCase();

  const existing = await Verification.findOne({
    verificationReference: normalizedReference,
  });

  const payload = {
    candidateName: candidateName.trim(),
    fatherName: fatherName.trim(),
    verificationReference: normalizedReference,
    course: course?.trim() || '',
    courseDuration: courseDuration?.trim() || '',
    trainingSession: trainingSession?.trim() || '',
    trainerName: trainerName?.trim() || '',
    finalGrade: finalGrade?.trim() || '',
    certificateImage: certificateImage?.trim() || '',
    certificatePdf: certificatePdf?.trim() || '',
  };

  if (existing) {
    const updated = await Verification.findByIdAndUpdate(existing._id, payload, { new: true });
    return res.json(updated);
  }

  const created = await Verification.create(payload);
  res.status(201).json(created);
};

export const getVerifications = async (req, res) => {
  const search = req.query.search?.toString().trim().toLowerCase() || '';
  const filter = search
    ? {
        $or: [
          { candidateName: { $regex: search, $options: 'i' } },
          { fatherName: { $regex: search, $options: 'i' } },
          { verificationReference: { $regex: search, $options: 'i' } },
        ],
      }
    : {};

  const verifications = await Verification.find(filter).sort({ createdAt: -1 });
  res.json(verifications);
};

export const getVerificationByReference = async (req, res) => {
  const { reference } = req.params;
  const normalized = reference.trim().toLowerCase();
  const record = await Verification.findOne({ verificationReference: normalized });
  if (!record) {
    return res.status(404).json({ message: 'Verification record not found' });
  }

  res.json(record);
};

export const updateVerification = async (req, res) => {
  const { id } = req.params;
  const verification = await Verification.findById(id);
  if (!verification) {
    return res.status(404).json({ message: 'Verification record not found' });
  }

  const payload = {
    ...req.body,
    verificationReference: req.body.verificationReference?.trim().toLowerCase() || verification.verificationReference,
    finalGrade: req.body.finalGrade?.trim() || verification.finalGrade,
  };

  const updated = await Verification.findByIdAndUpdate(id, payload, { new: true });
  res.json(updated);
};

export const deleteVerification = async (req, res) => {
  const { id } = req.params;
  const verification = await Verification.findById(id);
  if (!verification) {
    return res.status(404).json({ message: 'Verification record not found' });
  }

  await verification.deleteOne();
  res.json({ message: 'Verification record deleted' });
};
