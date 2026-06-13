import mongoose from 'mongoose';

const studentActivityAdSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const StudentActivityAd = mongoose.models.StudentActivityAd || mongoose.model('StudentActivityAd', studentActivityAdSchema);
export default StudentActivityAd;
