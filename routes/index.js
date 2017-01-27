'use strict';

const Promise = require('bluebird');
const router = require('express').Router();
const db = require('../models/index');
const Hotel = db.Hotel;
const Activity = db.Activity;
const Restaurant = db.Restaurant;

router.get('/', function (req, res, next) {
  const hotelPromise = Hotel.findAll();
  const activityPromise = Activity.findAll();
  const restaurantPromise = Restaurant.findAll();
  Promise.all([hotelPromise, activityPromise, restaurantPromise])
  .spread(function(hotel, activity, restaurant) {
    res.render('index', {hotels: hotel, activities: activity, restaurants: restaurant});
  })
  .catch(next);
});

module.exports = router;
