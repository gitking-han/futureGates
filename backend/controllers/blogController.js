import Blog from '../models/Blog.js';

const generateSlug = (title) => {
  return title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
};

export const createBlog = async (req, res) => {
  try {
    const { title, excerpt, category, author, publishedAt, readTime, tags, highlight, content } = req.body;

    if (!title || !excerpt || !category || !author || !publishedAt || !readTime || !content) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    let slug = generateSlug(title);
    const existingSlug = await Blog.findOne({ slug });
    if (existingSlug) {
      slug = `${slug}-${Date.now()}`;
    }

    const newBlog = await Blog.create({
      title,
      slug,
      excerpt,
      category,
      author,
      publishedAt,
      readTime,
      tags: Array.isArray(tags) ? tags : tags?.split(',').map((tag) => tag.trim()).filter(Boolean),
      highlight,
      content,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Blog creation failed:', error);
    res.status(500).json({ message: error?.message || 'Failed to create blog' });
  }
};

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

export const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;
  const blog = await Blog.findOne({ slug });
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  res.json(blog);
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, excerpt, category, author, publishedAt, readTime, tags, highlight, content } = req.body;

  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  if (title && title !== blog.title) {
    let slug = generateSlug(title);
    const existingSlug = await Blog.findOne({ slug, _id: { $ne: blog._id } });
    if (existingSlug) {
      slug = `${slug}-${Date.now()}`;
    }
    blog.slug = slug;
  }

  blog.title = title || blog.title;
  blog.excerpt = excerpt || blog.excerpt;
  blog.category = category || blog.category;
  blog.author = author || blog.author;
  blog.publishedAt = publishedAt || blog.publishedAt;
  blog.readTime = readTime || blog.readTime;
  blog.tags = Array.isArray(tags) ? tags : tags?.split(',').map((tag) => tag.trim()).filter(Boolean) || blog.tags;
  blog.highlight = highlight || blog.highlight;
  blog.content = content || blog.content;

  await blog.save();
  res.json(blog);
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  await blog.deleteOne();
  res.json({ message: 'Blog deleted' });
};
