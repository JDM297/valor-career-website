const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const newsRouter = require('./routes/news');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-mern-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use the news router
app.use('/api/news', newsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
