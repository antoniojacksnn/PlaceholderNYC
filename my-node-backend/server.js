const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://antoniojackson:<password>@placeholdernyc.g3jh86t.mongodb.net/?retryWrites=true&w=majority&appName=PlaceholderNYC', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
