const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Get all news articles
router.get('/', async (req, res) => {
  try {
    const articles = await News.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
