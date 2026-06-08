import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const createToken = (admin) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is required');
  }
  return jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const admin = await Admin.findOne({ email: normalizedEmail });

  if (!admin) {
    if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
      const envEmail = process.env.ADMIN_EMAIL.toLowerCase().trim();
      const envPassword = process.env.ADMIN_PASSWORD;
      if (normalizedEmail === envEmail && password === envPassword) {
        const envAdmin = {
          _id: new mongoose.Types.ObjectId(),
          email: normalizedEmail,
        };
        const token = createToken(envAdmin);
        return res.json({ token, email: envAdmin.email });
      }
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const passwordMatches = await bcrypt.compare(password, admin.password);
  if (!passwordMatches) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = createToken(admin);
  return res.json({ token, email: admin.email });
};
