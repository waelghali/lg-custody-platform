require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { models } = require('./models');
const userRoutes = require('./routes/users');
const sequelize = require('./config/database');
const app = express();

app.use(helmet());
app.use(compression());
app.use(cors({
  origin: ['http://localhost:5173', 'https://lg-custody-platform.vercel.app'],
}));
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'LG Custody Platform Backend' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('Database sync error:', err);
});

module.exports = app;