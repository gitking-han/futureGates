import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';

import adminRoutes from './routes/adminRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import verificationRoutes from './routes/verificationRoutes.js';
import studentActivityAdRoutes from './routes/studentActivityAdRoutes.js';
import heroSlideRoutes from './routes/heroSlideRoutes.js';

/* -------------------- PATH FIX (IMPORTANT) -------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------- ENV -------------------- */
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.set('trust proxy', 1);

/* -------------------- MIDDLEWARE -------------------- */
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

/* -------------------- RATE LIMIT -------------------- */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

/* -------------------- STATIC FILES (UPLOADS) -------------------- */
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

/* -------------------- API ROUTES -------------------- */
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/verifications', verificationRoutes);
app.use('/api/student-activity-ads', studentActivityAdRoutes);
app.use('/api/hero-slides', heroSlideRoutes);

/* -------------------- HEALTH CHECK -------------------- */
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok' });
});

/* -------------------- FRONTEND (REACT DIST) -------------------- */
app.use(express.static(path.join(__dirname, 'dist')));

/* IMPORTANT: React routing fallback */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/* -------------------- ERROR HANDLER -------------------- */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message || 'Internal server error' });
});

/* -------------------- START SERVER -------------------- */
connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
});