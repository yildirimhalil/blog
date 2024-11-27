const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Makale ekleme
router.post('/add', async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'Title, content, and author are required.' });
  }

  try {
    const newArticle = new Article({
      title,
      content,
      author,
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Tüm makaleleri listeleme
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
