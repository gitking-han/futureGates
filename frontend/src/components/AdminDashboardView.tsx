import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogService';
import { getVerifications } from '../services/verificationService';
import { getStudentActivityAds } from '../services/studentActivityAdService';
import type { BlogPost, VerificationRecord } from '../types';

interface AdminDashboardViewProps {
  adminEmail: string;
  onLogout: () => void;
  setTab: (tab: string) => void;
}

export const AdminDashboardView = ({ adminEmail, onLogout, setTab }: AdminDashboardViewProps) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [verifications, setVerifications] = useState<VerificationRecord[]>([]);
  const [studentActivityAds, setStudentActivityAds] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionMessage, setActionMessage] = useState('');

  useEffect(() => {
    const loadDashboard = async () => {
      setError('');
      setLoading(true);
      try {
        const [blogData, verificationData, activityData] = await Promise.all([getBlogs(), getVerifications(), getStudentActivityAds()]);
        setBlogs(blogData);
        setVerifications(verificationData);
        setStudentActivityAds(Array.isArray(activityData) ? activityData.length : 0);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Unable to load dashboard data.');
        if (err?.response?.status === 401) {
          onLogout();
        }
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [onLogout]);


  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue-dark">Admin Dashboard</p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">Welcome back, {adminEmail}</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Use the links below to manage blog posts and verification records separately. The dashboard shows current totals and quick actions.
            </p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-2xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
          >
            Logout
          </button>
        </div>

        {error && <p className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        {actionMessage && <p className="mt-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{actionMessage}</p>}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-brand-blue/5 p-6">
            <p className="text-sm font-semibold text-slate-600">Total Blogs</p>
            <p className="mt-4 text-5xl font-bold text-slate-900">{blogs.length}</p>
            <p className="mt-3 text-sm text-slate-500">Published blog posts available for review, editing, or deletion.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-brand-blue/5 p-6">
            <p className="text-sm font-semibold text-slate-600">Verification Records</p>
            <p className="mt-4 text-5xl font-bold text-slate-900">{verifications.length}</p>
            <p className="mt-3 text-sm text-slate-500">Current verification records available for management.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-brand-blue/5 p-6">
            <p className="text-sm font-semibold text-slate-600">Homepage Section</p>
            <p className="mt-4 text-5xl font-bold text-slate-900">{studentActivityAds}</p>
            <p className="mt-3 text-sm text-slate-500">Student activity and institution ad sections configured for home page.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setTab('admin-blogs')}
            className="rounded-3xl border border-slate-200 bg-brand-blue px-6 py-4 text-left text-white transition hover:bg-brand-blue-dark"
          >
            <p className="text-sm font-semibold">Manage Blogs</p>
            <p className="mt-2 text-sm text-slate-100">Create, edit, and delete your blog content in a dedicated page.</p>
          </button>
          <button
            type="button"
            onClick={() => setTab('admin-verification')}
            className="rounded-3xl border border-slate-200 bg-white px-6 py-4 text-left text-slate-900 transition hover:bg-slate-100"
          >
            <p className="text-sm font-semibold">Verification Center</p>
            <p className="mt-2 text-sm text-slate-500">Manage verification uploads and records on a separate admin page.</p>
          </button>
          <button
            type="button"
            onClick={() => setTab('admin-student-activity-ads')}
            className="rounded-3xl border border-slate-200 bg-white px-6 py-4 text-left text-slate-900 transition hover:bg-slate-100"
          >
            <p className="text-sm font-semibold">Home Page Section</p>
            <p className="mt-2 text-sm text-slate-500">Create or edit the student activity and institution ads section.</p>
          </button>
          <button
            type="button"
            onClick={() => setTab('admin-hero-slides')}
            className="rounded-3xl border border-slate-200 bg-white px-6 py-4 text-left text-slate-900 transition hover:bg-slate-100"
          >
            <p className="text-sm font-semibold">Hero Slider</p>
            <p className="mt-2 text-sm text-slate-500">Add or manage hero ticker images for the home page.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

