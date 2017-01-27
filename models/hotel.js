const db = require('./db');
const Sequelize = require('sequelize');

const hotel = db.define('hotel', {
  name: {type: Sequelize.STRING, allowNull: false},
  num_stars: {type: Sequelize.FLOAT, validate: {min: 1.0, max: 5.0}},
  amenities: {type: Sequelize.STRING}
});

module.exports = hotel;
