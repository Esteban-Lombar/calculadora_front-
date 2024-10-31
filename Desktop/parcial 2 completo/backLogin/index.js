// backend/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
