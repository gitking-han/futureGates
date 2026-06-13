import { useEffect, useState, type FormEvent } from 'react';
import {
  getStudentActivityAds,
  createStudentActivityAd,
  updateStudentActivityAd,
  deleteStudentActivityAd,
} from '../services/studentActivityAdService';
import type { StudentActivityAd } from '../types';

interface AdminStudentActivityAdsPageProps {
  onBack: () => void;
  setTab: (tab: string) => void;
}

export const AdminStudentActivityAdsPage = ({ onBack, setTab }: AdminStudentActivityAdsPageProps) => {
  const [items, setItems] = useState<StudentActivityAd[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionMessage, setActionMessage] = useState('');
  const [busyId, setBusyId] = useState('');

  const [editId, setEditId] = useState('');
  const [heading, setHeading] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getStudentActivityAds();
        setItems(data);
        // ensure heading is fixed and prefill form if an item exists
        if (data.length > 0) {
          const first = data[0];
          setEditId(first._id ?? '');
          setDescription(first.description || '');
          setImageUrl(first.imageUrl || '');
          setHeading('Student Activity & Ads');
        } else {
          setHeading('Student Activity & Ads');
        }
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Unable to load student activity ads.');
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  const resetForm = () => {
    setEditId('');
    setHeading('Student Activity & Ads');
    setDescription('');
    setImageUrl('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setActionMessage('');

    try {
      if (editId) {
        const updated = await updateStudentActivityAd(editId, { description: description.trim(), imageFile: imageFile ?? undefined });
        setItems((prev) => prev.map((item) => (item._id === updated._id ? updated : item)));
        setActionMessage('Section updated successfully.');
      } else {
        // Prefer update-only. If no section exists, instruct admin to initialize.
        setError('No existing section to update. Use the Initialize button below to create one.');
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to save section.');
    }
  };

  const handleEdit = (item: StudentActivityAd) => {
    setEditId(item._id ?? '');
    setHeading('Student Activity & Ads');
    setDescription(item.description);
    setImageUrl(item.imageUrl);
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    setBusyId(id);
    setError('');
    setActionMessage('');
    try {
      await deleteStudentActivityAd(id);
      setItems((prev) => prev.filter((item) => item._id !== id));
      setActionMessage('Section deleted successfully.');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to delete section.');
    } finally {
      setBusyId('');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-blue-dark">Student Activity & Ads</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Manage homepage section</h1>
          <p className="mt-2 text-sm text-slate-600">Add, update, or remove the combined student activity and institution ad section for the home page.</p>
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
            Blogs page
          </button>
        </div>
      </div>

      {error && <p className="mb-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {actionMessage && <p className="mb-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{actionMessage}</p>}

      <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{editId ? 'Edit section' : 'Create homepage section'}</h2>
            <p className="text-sm text-slate-500">Keep content minimal: heading, paragraph, and image only.</p>
          </div>
          {editId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
            <p className="font-semibold">Heading</p>
            <p className="text-sm text-slate-600">Student Activity & Ads (fixed)</p>
          </div>
          <textarea
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={5}
            placeholder="Short description paragraph"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Image (upload)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm w-full"
            />
            {imageUrl && !imageFile && (
              <p className="mt-2 text-xs text-slate-500">Current image shown below. Upload to replace.</p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-2xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
            >
              Update section
            </button>
            {!editId && (
              <button
                type="button"
                onClick={async () => {
                  setError('');
                  setActionMessage('');
                  try {
                    const created = await createStudentActivityAd({ description: description.trim() || 'Student highlights', imageFile: imageFile ?? undefined });
                    setItems((prev) => [created, ...prev]);
                    setEditId(created._id ?? '');
                    setActionMessage('Section initialized.');
                  } catch (err: any) {
                    setError(err?.response?.data?.message || 'Unable to initialize section.');
                  }
                }}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Initialize section
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Saved sections</h2>
            <p className="text-sm text-slate-500">Only one section is expected, but you can manage multiple records here.</p>
          </div>
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-semibold text-brand-blue">{items.length} record(s)</span>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">Loading section data…</div>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">No section configured yet.</div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item._id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">{item.heading}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => handleEdit(item)}
                      className="rounded-2xl border border-brand-blue bg-white px-4 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/10"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      disabled={busyId === item._id}
                      onClick={() => item._id && handleDelete(item._id)}
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <img src={item.imageUrl} alt={item.heading} className="w-full rounded-3xl object-cover max-h-64" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
