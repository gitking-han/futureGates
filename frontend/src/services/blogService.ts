import { apiClient } from './api';
import type { BlogPost } from '../types';

export type CreateBlogPayload = Omit<Partial<BlogPost>, 'content'> & {
  content: string;
};

const normalizeContent = (content: any): string[] => {
  if (Array.isArray(content)) {
    return content.map((item) => String(item));
  }
  if (typeof content === 'string') {
    return content.split(/\r?\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
  }
  return [];
};

const normalizeTags = (tags: any): string[] => {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }
  if (typeof tags === 'string') {
    return tags.split(',').map((tag) => tag.trim()).filter(Boolean);
  }
  return [];
};

const normalizeBlog = (blog: any): BlogPost => ({
  ...blog,
  slug: blog.slug ?? '',
  content: normalizeContent(blog.content),
  tags: normalizeTags(blog.tags),
});

export const getBlogs = async (): Promise<BlogPost[]> => {
  const { data } = await apiClient.get<BlogPost[]>('/api/blogs');
  return data.map(normalizeBlog);
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost> => {
  const { data } = await apiClient.get<BlogPost>(`/api/blogs/${encodeURIComponent(slug)}`);
  return normalizeBlog({ ...data, slug: data.slug ?? slug });
};

export const deleteBlog = async (id: string): Promise<void> => {
  await apiClient.delete(`/api/blogs/${id}`);
};

export const createBlog = async (payload: CreateBlogPayload): Promise<BlogPost> => {
  const { data } = await apiClient.post<BlogPost>('/api/blogs', payload);
  return normalizeBlog(data);
};

export type UpdateBlogPayload = Partial<Omit<CreateBlogPayload, 'content'>> & {
  content?: string;
};

export const updateBlog = async (id: string, payload: UpdateBlogPayload): Promise<BlogPost> => {
  const { data } = await apiClient.put<BlogPost>(`/api/blogs/${id}`, payload);
  return normalizeBlog(data);
};
