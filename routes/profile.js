const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Ulocation = require('../models/Ulocation');
const Uorder = require('../models/Uorder');
const User = require('../models/User');
const Shipper = require('../models/Shipper');



//  PROFILE LOCATIONS ROUTES
router.get('/profile/locations', async (req, res, next)=>{
  const ulocations = await Ulocation.find(); 
  res.render('profile/user-locations', {ulocations});
});
router.post('/profile/locations', (req, res, next)=>{
  Ulocation.create(req.body)
  .then(location=>{
    res.redirect('/profile/locations');
  })
  .catch((e)=>next(e));
});

// PROFILE ORDERS ROUTES
router.get('/profile/orders', async (req, res, next)=>{
  const uorders = await Uorder.find();
  const uLocations = await Ulocation.find();
  const users = await User.find();
  res.render('profile/user-order', {uorders, uLocations, users});
});
router.post('/profile/orders', (req, res, next)=>{
  Uorder.create(req.body)
  .then(order => {
    res.redirect('/profile/orders');
  })
  .catch((e)=>next(e));
});


//  PROFILE SHIPPERS ROUTES
router.get('/profile/shippers', async (req, res, next)=>{
  const shippers = await Shipper.find();
  const orders = await Order.find();
  res.render('profile/user-shippers', {orders, shippers})
});

module.exports = router;