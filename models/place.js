const db = require('./db');
const Sequelize = require('sequelize');

const place = db.define('place', {
  address: {type: Sequelize.STRING, allowNull: false},
  city: {type: Sequelize.STRING},
  state: {type: Sequelize.STRING},
  phone: {type: Sequelize.STRING},
  location: {type: Sequelize.ARRAY(Sequelize.FLOAT)}
});

module.exports = place;
