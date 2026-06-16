import mongoose from 'mongoose';

const heroSlideSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

heroSlideSchema.index({ order: 1, createdAt: -1 });

const HeroSlide = mongoose.models.HeroSlide || mongoose.model('HeroSlide', heroSlideSchema);
export default HeroSlide;
