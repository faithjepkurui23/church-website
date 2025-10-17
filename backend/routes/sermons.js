const express = require('express');
const router = express.Router();

// ✅ In-memory sermons array (mutable)
let sermons = [
  {
    id: 1,
    title: 'Faith Over Fear',
    preacher: 'Pastor John',
    date: '2025-10-15',
    description: 'A powerful message about trusting God in hard times.'
  },
  {
    id: 2,
    title: 'Walking in Love',
    preacher: 'Pastor Mary',
    date: '2025-10-08',
    description: 'How to live a life of love and unity in Christ.'
  }
];

// ✅ Get all sermons
router.get('/', (req, res) => {
  res.json(sermons);
});

// ✅ Get a single sermon by ID
router.get('/:id', (req, res) => {
  const sermonId = parseInt(req.params.id);
  const sermon = sermons.find(s => s.id === sermonId);
  if (!sermon) return res.status(404).json({ message: 'Sermon not found' });
  res.json(sermon);
});

// ✅ Create a new sermon
router.post('/', (req, res) => {
  const { title, preacher, date, description } = req.body;
  const newSermon = {
    id: sermons.length + 1,
    title,
    preacher,
    date,
    description
  };
  sermons.push(newSermon);
  res.status(201).json({ message: 'Sermon created', sermon: newSermon });
});

// ✅ Update a sermon by ID
router.put('/:id', (req, res) => {
  const sermonId = parseInt(req.params.id);
  const { title, preacher, date, description } = req.body;

  const sermonIndex = sermons.findIndex(s => s.id === sermonId);
  if (sermonIndex === -1) return res.status(404).json({ message: 'Sermon not found' });

  sermons[sermonIndex] = {
    id: sermonId,
    title: title || sermons[sermonIndex].title,
    preacher: preacher || sermons[sermonIndex].preacher,
    date: date || sermons[sermonIndex].date,
    description: description || sermons[sermonIndex].description
  };

  res.json({ message: 'Sermon updated', sermon: sermons[sermonIndex] });
});

// ✅ Delete a sermon by ID
router.delete('/:id', (req, res) => {
  const sermonId = parseInt(req.params.id);
  const sermonIndex = sermons.findIndex(s => s.id === sermonId);
  if (sermonIndex === -1) return res.status(404).json({ message: 'Sermon not found' });

  const deleted = sermons.splice(sermonIndex, 1);
  res.json({ message: 'Sermon deleted', sermon: deleted[0] });
});

module.exports = router;

