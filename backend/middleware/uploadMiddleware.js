import multer from 'multer';
import path from 'path';
import fs from 'fs';

const excelDir = path.resolve(process.cwd(), 'uploads', 'excel');
if (!fs.existsSync(excelDir)) {
  fs.mkdirSync(excelDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, excelDir),
  filename: (_, file, cb) => {
    const safeName = `${Date.now()}-${file.originalname}`.replace(/\s+/g, '-');
    cb(null, safeName);
  },
});

const fileFilter = (_, file, cb) => {
  const allowedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
  const extName = path.extname(file.originalname).toLowerCase();
  const isAllowedExt = extName === '.xlsx' || extName === '.xls';

  if (allowedTypes.includes(file.mimetype) && isAllowedExt) {
    return cb(null, true);
  }

  cb(new Error('Only .xlsx and .xls files are allowed.'));
};

export const excelUpload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});
