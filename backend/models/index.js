const sequelize = require('../config/database');
const User = require('./user');

const models = { User };

module.exports = { models, sequelize };