import StudentActivityAd from '../models/StudentActivityAd.js';

export const createStudentActivityAd = async (req, res) => {
  try {
    const { heading, description, imageUrl } = req.body;

    if (!heading || !description || !imageUrl) {
      return res.status(400).json({ message: 'Heading, description and imageUrl are required.' });
    }

    const created = await StudentActivityAd.create({ heading, description, imageUrl });
    res.status(201).json(created);
  } catch (error) {
    console.error('Create student activity ad failed:', error);
    res.status(500).json({ message: error?.message || 'Unable to create record.' });
  }
};

export const getStudentActivityAds = async (req, res) => {
  const items = await StudentActivityAd.find().sort({ createdAt: -1 });
  res.json(items);
};

export const updateStudentActivityAd = async (req, res) => {
  const { id } = req.params;
  const { heading, description, imageUrl } = req.body;

  const item = await StudentActivityAd.findById(id);
  if (!item) {
    return res.status(404).json({ message: 'Student activity ad not found.' });
  }

  item.heading = heading?.trim() || item.heading;
  item.description = description?.trim() || item.description;
  item.imageUrl = imageUrl?.trim() || item.imageUrl;

  await item.save();
  res.json(item);
};

export const deleteStudentActivityAd = async (req, res) => {
  const { id } = req.params;
  const item = await StudentActivityAd.findById(id);
  if (!item) {
    return res.status(404).json({ message: 'Student activity ad not found.' });
  }

  await item.deleteOne();
  res.json({ message: 'Student activity ad deleted.' });
};
