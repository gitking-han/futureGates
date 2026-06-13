import StudentActivityAd from '../models/StudentActivityAd.js';

// Fixed heading enforced by requirement
const FIXED_HEADING = 'Student Activity & Ads';

// Create or update single section (upsert). Accepts description and optional imageBase64 in body.
export const upsertStudentActivityAd = async (req, res) => {
  try {
    const description = (req.body.description || '').trim();

    if (!description && !req.file) {
      return res.status(400).json({ message: 'Description or image is required.' });
    }

    let imageBase64 = req.body.imageUrl || '';
    if (req.file && req.file.buffer) {
      imageBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }

    const existing = await StudentActivityAd.findOne();
    const payload = {
      heading: FIXED_HEADING,
      description: description || (existing ? existing.description : ''),
      imageUrl: imageBase64 || (existing ? existing.imageUrl : ''),
    };

    if (existing) {
      Object.assign(existing, payload);
      await existing.save();
      return res.json(existing);
    }

    const created = await StudentActivityAd.create(payload);
    res.status(201).json(created);
  } catch (error) {
    console.error('Upsert student activity ad failed:', error);
    res.status(500).json({ message: error?.message || 'Unable to upsert record.' });
  }
};

export const getStudentActivityAds = async (req, res) => {
  const items = await StudentActivityAd.find().sort({ createdAt: -1 });
  res.json(items);
};

export const updateStudentActivityAd = async (req, res) => {
  const { id } = req.params;
  const item = await StudentActivityAd.findById(id);
  const description = req.body.description?.trim();

  if (item) {
    if (description) item.description = description;

    if (req.file && req.file.buffer) {
      item.imageUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    } else if (req.body.imageUrl) {
      item.imageUrl = req.body.imageUrl.trim();
    }

    // Keep heading fixed
    item.heading = FIXED_HEADING;

    await item.save();
    return res.json(item);
  }

  // If the record doesn't exist, create a new one (treat PUT as upsert/fallback create)
  try {
    let imageBase64 = req.body.imageUrl || '';
    if (req.file && req.file.buffer) {
      imageBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }

    const payload = {
      heading: FIXED_HEADING,
      description: description || '',
      imageUrl: imageBase64 || '',
    };

    const created = await StudentActivityAd.create(payload);
    return res.status(201).json(created);
  } catch (error) {
    console.error('Create fallback in update failed:', error);
    return res.status(500).json({ message: error?.message || 'Unable to create record.' });
  }
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
