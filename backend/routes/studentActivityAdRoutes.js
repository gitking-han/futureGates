import express from 'express';
import {
  createStudentActivityAd,
  getStudentActivityAds,
  updateStudentActivityAd,
  deleteStudentActivityAd,
} from '../controllers/studentActivityAdController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protectAdmin, createStudentActivityAd);
router.get('/', getStudentActivityAds);
router.put('/:id', protectAdmin, updateStudentActivityAd);
router.delete('/:id', protectAdmin, deleteStudentActivityAd);

export default router;
