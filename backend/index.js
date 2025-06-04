require('dotenv').config();
const express = require('express');
const cors = require('cors');
const models = require('./models');
const userRoutes = require('./routes/users'); // Add this
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes); // Add this

app.get('/', (req, res) => {
  res.json({ message: 'LG Custody Platform Backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));