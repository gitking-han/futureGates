import mongoose from 'mongoose';

const verificationSchema = new mongoose.Schema(
  {
    candidateName: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },
    verificationReference: { type: String, required: true, trim: true, unique: true, lowercase: true },
    course: { type: String, trim: true },
    courseDuration: { type: String, trim: true },
    trainingSession: { type: String, trim: true },
    trainerName: { type: String, trim: true },
    finalGrade: { type: String, trim: true },
    certificateImage: { type: String, trim: true },
    certificatePdf: { type: String, trim: true },
  },
  { timestamps: true }
);

verificationSchema.index({ verificationReference: 1 });

const Verification = mongoose.models.Verification || mongoose.model('Verification', verificationSchema);
export default Verification;
