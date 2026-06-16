import express from 'express';
import {
  createHeroSlide,
  getHeroSlides,
  updateHeroSlide,
  deleteHeroSlide,
} from '../controllers/heroSlideController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getHeroSlides);
router.post('/', protectAdmin, createHeroSlide);
router.put('/:id', protectAdmin, updateHeroSlide);
router.delete('/:id', protectAdmin, deleteHeroSlide);

export default router;
