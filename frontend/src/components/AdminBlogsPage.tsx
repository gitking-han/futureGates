import { useEffect, useState, type FormEvent } from 'react';
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  type CreateBlogPayload,
  type UpdateBlogPayload,
} from '../services/blogService';
import type { BlogPost } from '../types';

interface AdminBlogsPageProps {
  adminEmail: string;
  onBack: () => void;
  setTab: (tab: string) => void;
}

export const AdminBlogsPage = ({ adminEmail, onBack, setTab }: AdminBlogsPageProps) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionMessage, setActionMessage] = useState('');
  const [busyId, setBusyId] = useState('');

  const [editBlogId, setEditBlogId] = useState('');
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [publishedAt, setPublishedAt] = useState(() => new Date().toISOString().slice(0, 16));
  const [readTime, setReadTime] = useState('2 min');

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      setError('');
      try {
        const items = await getBlogs();
        setBlogs(items);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Unable to load blogs.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const resetForm = () => {
    setEditBlogId('');
    setTitle('');
    setExcerpt('');
    setCategory('');
    setAuthor('');
    setContent('');
    setTagsInput('');
    setPublishedAt(new Date().toISOString().slice(0, 16));
    setReadTime('2 min');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setActionMessage('');

    const payload: CreateBlogPayload = {
      title: title.trim(),
      excerpt: excerpt.trim(),
      category: category.trim() || 'General',
      author: author.trim() || 'Admin',
      content: content.trim(),
      publishedAt: new Date(publishedAt).toISOString(),
      readTime: readTime.trim() || '2 min',
      tags: tagsInput.split(',').map((tag) => tag.trim()).filter(Boolean),
    };

    try {
      if (editBlogId) {
        const updated = await updateBlog(editBlogId, payload as unknown as UpdateBlogPayload);
        setBlogs((prev) => prev.map((blog) => (blog._id === updated._id ? updated : blog)));
        setActionMessage('Blog updated successfully.');
      } else {
        const created = await createBlog(payload);
        setBlogs((prev) => [created, ...prev]);
        setActionMessage('Blog created successfully.');
      }
      resetForm();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to save blog.');
    }
  };

  const handleEdit = (blog: BlogPost) => {
    setEditBlogId(blog._id ?? '');
    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setCategory(blog.category);
    setAuthor(blog.author);
    setContent(Array.isArray(blog.content) ? blog.content.join('\n\n') : String(blog.content || ''));
    setTagsInput(Array.isArray(blog.tags) ? blog.tags.join(', ') : String(blog.tags || ''));
    setPublishedAt(new Date(blog.publishedAt).toISOString().slice(0, 16));
    setReadTime(blog.readTime || '2 min');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    setBusyId(id);
    setError('');
    setActionMessage('');
    try {
      await deleteBlog(id);
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      setActionMessage('Blog deleted.');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to delete blog.');
    } finally {
      setBusyId('');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-blue-dark">Blog Management</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Manage blog posts</h1>
          <p className="mt-2 text-sm text-slate-600">Create, edit, and delete content from a single admin page.</p>
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
            onClick={() => setTab('admin-verification')}
            className="rounded-2xl bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            Verification page
          </button>
        </div>
      </div>

      {error && <p className="mb-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {actionMessage && <p className="mb-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{actionMessage}</p>}

      <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{editBlogId ? 'Edit blog post' : 'Create a new blog post'}</h2>
            <p className="text-sm text-slate-500">Fill the fields below and save to publish or update a blog.</p>
          </div>
          {editBlogId && (
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
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
            <input
              required
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              placeholder="Author"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              placeholder="Excerpt"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
            <input
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              placeholder="Category"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <input
              value={tagsInput}
              onChange={(event) => setTagsInput(event.target.value)}
              placeholder="Tags (comma separated)"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
            <input
              value={publishedAt}
              onChange={(event) => setPublishedAt(event.target.value)}
              type="datetime-local"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
            <input
              value={readTime}
              onChange={(event) => setReadTime(event.target.value)}
              placeholder="Read time"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
            />
          </div>

          <textarea
            required
            value={content}
            onChange={(event) => setContent(event.target.value)}
            rows={8}
            placeholder="Article content"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="rounded-2xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
            >
              {editBlogId ? 'Save changes' : 'Create blog'}
            </button>
            <p className="text-sm text-slate-500">Saved posts show in the list below for quick editing.</p>
          </div>
        </form>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Blog posts</h2>
            <p className="text-sm text-slate-500">Manage your published blog posts with edit and delete actions.</p>
          </div>
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-semibold text-brand-blue">{blogs.length} posts</span>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">Loading blogs…</div>
        ) : blogs.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">No blog posts available.</div>
        ) : (
          <div className="space-y-3">
            {blogs.map((blog) => (
              <div key={blog._id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{blog.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{blog.excerpt}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                      <span className="rounded-full bg-white px-3 py-1 shadow-sm">{blog.category}</span>
                      <span className="rounded-full bg-white px-3 py-1 shadow-sm">{blog.author}</span>
                      <span className="rounded-full bg-white px-3 py-1 shadow-sm">{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleEdit(blog)}
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      disabled={busyId === blog._id}
                      onClick={() => blog._id && handleDelete(blog._id)}
                      className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
                    >
                      {busyId === blog._id ? 'Deleting…' : 'Delete'}
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
