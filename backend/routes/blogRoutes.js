import express from 'express';
import { createBlog, getBlogs, getBlogBySlug, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protectAdmin, createBlog);
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);
router.put('/:id', protectAdmin, updateBlog);
router.delete('/:id', protectAdmin, deleteBlog);

export default router;
