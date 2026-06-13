import express from 'express';
import multer from 'multer';
import {
  upsertStudentActivityAd,
  getStudentActivityAds,
  updateStudentActivityAd,
  deleteStudentActivityAd,
} from '../controllers/studentActivityAdController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

// POST acts as upsert: if a record exists it updates it, otherwise creates one.
router.post('/', protectAdmin, upload.single('image'), upsertStudentActivityAd);
router.get('/', getStudentActivityAds);
router.put('/:id', protectAdmin, upload.single('image'), updateStudentActivityAd);
router.delete('/:id', protectAdmin, deleteStudentActivityAd);

export default router;
