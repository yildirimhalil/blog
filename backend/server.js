const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const articleRoutes = require('./routes/articleRoutes');

dotenv.config(); // .env dosyasındaki değişkenleri yükle

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // JSON verisi alabilmek için

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
  })
  .catch((error) => {
    console.error('MongoDB bağlantısı başarısız:', error.message);
  });

// API routes
app.use('/api/articles', articleRoutes);

// Sunucu başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
