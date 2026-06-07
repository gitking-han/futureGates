import React, { useMemo, useState } from 'react';
import { Search, Tag, ChevronRight } from 'lucide-react';
import { BLOGS } from '../data';
import { BlogPost } from '../types';

interface BlogsViewProps {
    setTab: (tab: string) => void;
    setSelectedBlogId: (id: string) => void;
}

export const BlogsView: React.FC<BlogsViewProps> = ({ setTab, setSelectedBlogId }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        const unique = Array.from(new Set(BLOGS.map((post) => post.category)));
        return ['All', ...unique];
    }, []);

    const filteredBlogs = BLOGS.filter((post) => {
        const searchMatch = [post.title, post.excerpt, post.author, post.tags.join(' ')].some((value) =>
            value.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
        return searchMatch && categoryMatch;
    });

    return (
        <div className="space-y-12 pb-16">
            <section className="bg-slate-900 text-white py-14 px-4 border-b-2 border-brand-orange text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="blogBubble" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#e35e14" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#00122a" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <circle cx="15%" cy="25%" r="70" fill="url(#blogBubble)" />
                        <circle cx="85%" cy="75%" r="110" fill="url(#blogBubble)" />
                    </svg>
                </div>

                <div className="relative max-w-4xl mx-auto space-y-4">
                    <p className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
                        FUTURE GATES ANALYTICS & INSIGHTS
                    </p>
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        Blog & Learning Resources
                    </h1>
                    <p className="text-slate-400 text-xs max-w-2xl mx-auto leading-relaxed">
                        Read the latest stories, skill guides, and practical lessons on AI, design, marketing, and professional training.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-orange font-bold font-mono mb-2">
                                Latest Insights
                            </p>
                            <h2 className="font-display text-xl md:text-2xl text-slate-900 font-bold">
                                Knowledge for students, professionals, and teams.
                            </h2>
                        </div>
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="search"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 text-[11px] font-semibold rounded-full transition-all border ${selectedCategory === category
                                        ? 'bg-brand-blue text-white border-brand-blue'
                                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredBlogs.length === 0 ? (
                            <div className="col-span-full rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
                                No articles match your filter. Try a different keyword or category.
                            </div>
                        ) : (
                            filteredBlogs.map((post: BlogPost) => (
                                <article onClick={() => {
                                    setSelectedBlogId(post.id);
                                    setTab('blog-detail');
                                }}
                                    key={post.id} className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                                            {post.category}
                                        </span>
                                        <span className="rounded-full bg-brand-orange/10 text-brand-orange px-2 py-1 text-[10px] uppercase font-semibold">
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-lg text-slate-900 font-bold mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-[.18em] font-semibold">
                                            <span>{post.author}</span>
                                            <span>{post.publishedAt}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-xs text-slate-600">
                                                    <Tag className="w-3.5 h-3.5" /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 text-right">
                                        <button
                                            onClick={() => {
                                                setSelectedBlogId(post.id);
                                                setTab('blog-detail');
                                            }}
                                            className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:text-brand-blue-light transition"
                                        >
                                            Read More <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
