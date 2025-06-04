const sequelize = require('../config/database');
const User = require('./user');

const models = { User };

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Error syncing database:', err);
});

module.exports = models;