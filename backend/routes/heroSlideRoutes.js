import express from 'express';
import multer from 'multer';
import {
  createHeroSlide,
  getHeroSlides,
  updateHeroSlide,
  deleteHeroSlide,
} from '../controllers/heroSlideController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

router.get('/', getHeroSlides);
router.post('/', protectAdmin, upload.single('image'), createHeroSlide);
router.put('/:id', protectAdmin, upload.single('image'), updateHeroSlide);
router.delete('/:id', protectAdmin, deleteHeroSlide);

export default router;
