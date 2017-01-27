const db = require('./db');
const Sequelize = require('sequelize');

const restaurant = db.define('restaurant', {
  name: {type: Sequelize.STRING, allowNull: false, unique: true},
  cuisine: {type: Sequelize.STRING},
  price: {type: Sequelize.INTEGER, validate: {min: 1, max: 5}}
});

module.exports = restaurant;
