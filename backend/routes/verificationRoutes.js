import express from 'express';
import { uploadExcel } from '../controllers/verificationController.js';
import { downloadTemplate, createVerification, getVerifications, getVerificationByReference, updateVerification, deleteVerification } from '../controllers/verificationController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { excelUpload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/upload-excel', protectAdmin, excelUpload.single('file'), uploadExcel);
router.get('/template', protectAdmin, downloadTemplate);
router.post('/', protectAdmin, createVerification);
router.get('/', protectAdmin, getVerifications);
router.get('/:reference', getVerificationByReference);
router.put('/:id', protectAdmin, updateVerification);
router.delete('/:id', protectAdmin, deleteVerification);

export default router;
