'use strict';

const db = require('./db');

const Hotel = require('./hotel');
const Restaurant = require('./Restaurant');
const Activity = require('./Activity');
const Place = require('./place');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
