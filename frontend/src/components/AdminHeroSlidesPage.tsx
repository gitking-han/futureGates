import { useEffect, useState, type FormEvent } from 'react';
import {
  createHeroSlide,
  deleteHeroSlide,
  getHeroSlides,
  updateHeroSlide,
} from '../services/heroSlideService';
import type { HeroSlide } from '../types';

interface AdminHeroSlidesPageProps {
  onBack: () => void;
  setTab: (tab: string) => void;
}

export const AdminHeroSlidesPage = ({ onBack, setTab }: AdminHeroSlidesPageProps) => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionMessage, setActionMessage] = useState('');
  const [busyId, setBusyId] = useState('');

  const [editId, setEditId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [order, setOrder] = useState<number>(0);

  useEffect(() => {
    const loadSlides = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getHeroSlides();
        setSlides(data);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Unable to load hero slides.');
      } finally {
        setLoading(false);
      }
    };

    loadSlides();
  }, []);

  const resetForm = () => {
    setEditId('');
    setImageUrl('');
    setImageFile(null);
    setOrder(0);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setActionMessage('');

    if (!imageUrl.trim() && !imageFile) {
      setError('Image file or image URL is required.');
      return;
    }

    try {
      if (editId) {
        const updated = await updateHeroSlide(editId, {
          imageUrl: imageUrl.trim() || undefined,
          imageFile: imageFile ?? undefined,
          order,
        });
        setSlides((prev) => prev.map((item) => (item._id === updated._id ? updated : item)));
        setActionMessage('Slide updated successfully.');
      } else {
        const created = await createHeroSlide({
          imageUrl: imageUrl.trim() || undefined,
          imageFile: imageFile ?? undefined,
          order,
        });
        setSlides((prev) => [...prev, created].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)));
        setActionMessage('Slide created successfully.');
      }
      resetForm();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to save hero slide.');
    }
  };

  const handleEdit = (slide: HeroSlide) => {
    setEditId(slide._id ?? '');
    setImageUrl(slide.imageUrl);
    setImageFile(null);
    setOrder(slide.order ?? 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    setBusyId(id);
    setError('');
    setActionMessage('');
    try {
      await deleteHeroSlide(id);
      setSlides((prev) => prev.filter((item) => item._id !== id));
      if (editId === id) {
        resetForm();
      }
      setActionMessage('Slide deleted successfully.');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to delete slide.');
    } finally {
      setBusyId('');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-blue-dark">Hero Slider Management</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Manage homepage hero slides</h1>
          <p className="mt-2 text-sm text-slate-600">Add, edit, reorder, or remove images for the hero ticker on the home page.</p>
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
            onClick={() => setTab('admin-dashboard')}
            className="rounded-2xl bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            Dashboard
          </button>
        </div>
      </div>

      {error && <p className="mb-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {actionMessage && <p className="mb-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{actionMessage}</p>}

      <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{editId ? 'Edit slide' : 'Create slide'}</h2>
            <p className="text-sm text-slate-500">Provide the image URL and order number for the homepage slider.</p>
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
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Image file</label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setImageFile(event.target.files?.[0] ?? null)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
            <p className="mt-2 text-sm text-slate-500">Upload an image from your system - this is preferred for hero slides.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Image URL (optional)</label>
            <input 
              type="url"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              placeholder="https://example.com/slide.jpg"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
            <p className="mt-2 text-sm text-slate-500">If you have a remote image URL, provide it here. Otherwise upload a file.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Display order</label>
            <input
              type="number"
              value={order}
              onChange={(event) => setOrder(Number(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            {editId ? 'Save slide' : 'Create slide'}
          </button>
        </form>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Saved slides</h2>
            <p className="text-sm text-slate-500">Reorder the slider by updating the order value, or remove slides when they are no longer needed.</p>
          </div>
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-semibold text-brand-blue">{slides.length} slide(s)</span>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">Loading slides…</div>
        ) : slides.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">No slides configured yet.</div>
        ) : (
          <div className="grid gap-4">
            {slides
              .slice()
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((slide) => (
                <div key={slide._id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-700">Order: {slide.order ?? 0}</p>
                      <p className="mt-2 text-sm text-slate-500 break-all">{slide.imageUrl}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() => handleEdit(slide)}
                        className="rounded-2xl border border-brand-blue bg-white px-4 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/10"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        disabled={busyId === slide._id}
                        onClick={() => slide._id && handleDelete(slide._id)}
                        className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                    <img src={slide.imageUrl} alt={`Hero slide ${slide.order ?? ''}`} className="h-44 w-full object-cover" />
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  );
};
