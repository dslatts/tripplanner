const db = require('./db');
const Sequelize = require('sequelize');

const activity = db.define('activity', {
  name: {type: Sequelize.STRING, allowNull: false},
  age_range: {type: Sequelize.STRING}
});

module.exports = activity;
