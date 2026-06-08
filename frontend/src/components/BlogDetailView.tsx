import React, { useEffect, useState } from 'react';
import { ArrowLeft, Tag, CalendarDays } from 'lucide-react';
import { getBlogBySlug } from '../services/blogService';
import { BlogPost } from '../types';

interface BlogDetailViewProps {
  blogId: string;
  onBack: () => void;
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({ blogId, onBack }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      try {
        const blog = await getBlogBySlug(blogId);
        if (active) {
          setPost(blog);
        }
      } catch (fetchError: any) {
        if (active) {
          setError(fetchError?.response?.data?.message || 'Blog not found');
          setPost(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    if (blogId) {
      void fetchBlog();
    } else {
      setLoading(false);
      setPost(null);
      setError('Blog not specified');
    }

    return () => {
      active = false;
    };
  }, [blogId]);

  if (loading) {
    return (
      <div className="space-y-8 pb-16">
        <div className="bg-slate-900 text-white py-12 px-4 rounded-3xl max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl font-bold">Loading article...</h1>
        </div>
      </div>
    );
  }

  if (!post || error) {
    return (
      <div className="space-y-8 pb-16">
        <div className="bg-slate-900 text-white py-12 px-4 rounded-3xl max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl font-bold">Article not found</h1>
          <p className="text-slate-300 mt-3 text-sm">{error || 'Please return to the blog list and select a valid article.'}</p>
          <button
            onClick={onBack}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-blue text-white text-sm font-bold hover:bg-brand-blue-light transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-16">
      <section className="bg-slate-900 text-white py-14 px-4 border-b-2 border-brand-orange text-center rounded-b-3xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="detailBubble" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e35e14" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#00122a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="15%" cy="20%" r="70" fill="url(#detailBubble)" />
            <circle cx="85%" cy="80%" r="110" fill="url(#detailBubble)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-slate-200 font-semibold hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </button>
          <p className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            FUTURE GATES INSIGHT
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-300 uppercase tracking-[.24em] font-bold">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> {post.publishedAt}
            </span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-8">
          <div className="flex flex-col gap-3 text-slate-500 text-sm">
            <div className="flex flex-wrap gap-3">
              {post.tags?.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                  <Tag className="w-3.5 h-3.5" /> {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              Written by <strong>{post.author}</strong>. {post.highlight ?? ''}
            </p>
          </div>

          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
