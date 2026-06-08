import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    publishedAt: { type: String, required: true, trim: true },
    readTime: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    highlight: { type: String, trim: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;
