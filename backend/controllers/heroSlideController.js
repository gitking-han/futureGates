import HeroSlide from '../models/HeroSlide.js';

export const getHeroSlides = async (req, res) => {
  const slides = await HeroSlide.find().sort({ order: 1, createdAt: -1 });
  res.json(slides);
};

export const createHeroSlide = async (req, res) => {
  try {
    const imageUrl = (req.body.imageUrl || '').trim();
    const order = Number(req.body.order ?? 0);

    if (!imageUrl) {
      return res.status(400).json({ message: 'imageUrl is required.' });
    }

    const slide = await HeroSlide.create({ imageUrl, order });
    res.status(201).json(slide);
  } catch (error) {
    console.error('Failed to create hero slide:', error);
    res.status(500).json({ message: error?.message || 'Unable to create hero slide.' });
  }
};

export const updateHeroSlide = async (req, res) => {
  try {
    const { id } = req.params;
    const slide = await HeroSlide.findById(id);
    if (!slide) {
      return res.status(404).json({ message: 'Hero slide not found.' });
    }

    if (typeof req.body.imageUrl === 'string') {
      slide.imageUrl = req.body.imageUrl.trim();
    }
    if (typeof req.body.order !== 'undefined') {
      slide.order = Number(req.body.order);
    }

    await slide.save();
    res.json(slide);
  } catch (error) {
    console.error('Failed to update hero slide:', error);
    res.status(500).json({ message: error?.message || 'Unable to update hero slide.' });
  }
};

export const deleteHeroSlide = async (req, res) => {
  try {
    const { id } = req.params;
    const slide = await HeroSlide.findById(id);
    if (!slide) {
      return res.status(404).json({ message: 'Hero slide not found.' });
    }

    await slide.deleteOne();
    res.json({ message: 'Hero slide deleted.' });
  } catch (error) {
    console.error('Failed to delete hero slide:', error);
    res.status(500).json({ message: error?.message || 'Unable to delete hero slide.' });
  }
};
