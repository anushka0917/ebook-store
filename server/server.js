const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('E-book Store API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
