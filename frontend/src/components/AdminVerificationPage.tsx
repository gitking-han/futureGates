import { useEffect, useState, useRef, type FormEvent } from 'react';
import {
  getVerifications,
  deleteVerification,
  uploadVerificationExcel,
  createVerification,
} from '../services/verificationService';
import type { VerificationRecord } from '../types';

interface AdminVerificationPageProps {
  onBack: () => void;
  setTab: (tab: string) => void;
}

export const AdminVerificationPage = ({ onBack, setTab }: AdminVerificationPageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [verifications, setVerifications] = useState<VerificationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionMessage, setActionMessage] = useState('');
  const [busyId, setBusyId] = useState('');
  const [verificationFile, setVerificationFile] = useState<File | null>(null);

  const [candidateName, setCandidateName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [verificationReference, setVerificationReference] = useState('');
  const [course, setCourse] = useState('');
  const [trainerName, setTrainerName] = useState('');

  useEffect(() => {
    const loadRecords = async () => {
      setLoading(true);
      setError('');
      try {
        const items = await getVerifications();
        setVerifications(items);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Unable to load verification records.');
      } finally {
        setLoading(false);
      }
    };

    loadRecords();
  }, []);

  const resetForm = () => {
    setCandidateName('');
    setFatherName('');
    setVerificationReference('');
    setCourse('');
    setTrainerName('');
  };

  const handleUpload = async () => {
    if (!verificationFile) {
      setError('Please select an Excel file first.');
      return;
    }

    setError('');
    setActionMessage('');
    try {
      await uploadVerificationExcel(verificationFile);
      setActionMessage('Excel uploaded successfully. Records refreshed.');
      const records = await getVerifications();
      setVerifications(records);
      // Clear file input after successful upload
      setVerificationFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to upload Excel file.');
      // Clear file input on error as well to allow retry
      setVerificationFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setActionMessage('');

    try {
      const created = await createVerification({
        candidateName: candidateName.trim(),
        fatherName: fatherName.trim(),
        verificationReference: verificationReference.trim(),
        course: course.trim(),
        trainerName: trainerName.trim(),
      });
      setVerifications((prev) => [created, ...prev]);
      setActionMessage('Verification record created.');
      resetForm();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to create record.');
    }
  };

  const handleDelete = async (id: string) => {
    setBusyId(id);
    setError('');
    setActionMessage('');
    try {
      await deleteVerification(id);
      setVerifications((prev) => prev.filter((record) => record._id !== id));
      setActionMessage('Verification record deleted.');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to delete record.');
    } finally {
      setBusyId('');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-blue-dark">Verification Admin</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Manage verification records</h1>
          <p className="mt-2 text-sm text-slate-600">Upload bulk Excel data or create a single record manually.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onBack}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Back to dashboard
          </button>
          <button
            type="button"
            onClick={() => setTab('admin-blogs')}
            className="rounded-2xl bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            Blog page
          </button>
        </div>
      </div>

      {error && <p className="mb-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {actionMessage && <p className="mb-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{actionMessage}</p>}

      <section className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Upload Excel</h2>
              <p className="text-sm text-slate-500">Bulk import verification records from an Excel file.</p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls"
              onChange={(event) => setVerificationFile(event.target.files?.[0] ?? null)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
            <button
              type="button"
              onClick={handleUpload}
              className="rounded-2xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
            >
              Upload Excel
            </button>
          </div>
        </div>

      
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Verification records</h2>
            <p className="text-sm text-slate-500">Review or remove verification entries.</p>
          </div>
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-semibold text-brand-blue">{verifications.length} total</span>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">Loading records…</div>
        ) : verifications.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">No verification records found.</div>
        ) : (
          <div className="space-y-4">
            {verifications.map((record) => (
              <div key={record._id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{record.candidateName}</p>
                    <p className="mt-1 text-sm text-slate-500">Reference: {record.verificationReference || 'N/A'}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                      {record.course && <span className="rounded-full bg-white px-3 py-1 shadow-sm">Course: {record.course}</span>}
                      {record.trainerName && <span className="rounded-full bg-white px-3 py-1 shadow-sm">Trainer: {record.trainerName}</span>}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-right">
                    <button
                      type="button"
                      disabled={busyId === record._id}
                      onClick={() => record._id && handleDelete(record._id)}
                      className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
                    >
                      {busyId === record._id ? 'Deleting…' : 'Delete'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
