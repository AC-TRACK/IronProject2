const express = require('express');
const router = express.Router();
const Location = require('../models/Location')

router.get('/navbar', (req, res)=>{
  res.render('navbar');
});

//  location route (GET & POST)
router.get('/location', async (req, res, next)=>{
  const locations = await Location.find();

  res.render('admin/location', {locations});
});
router.post('/location', (req, res, next)=>{
  Location.create(req.body)
  .then((location)=>{
    console.log(location);
    res.render('admin/location');
  })
  .catch((e)=>next(e));
});
//  shippers route (GET & POST)
router.get('/shippers', (req, res, next)=>{
res.send('shippers worked');
});

router.post('/shippers', (req, res, next)=>{
  Shipper.create(req.body)
  .then((shipper)=>{
    console.log(shipper);
    res.render('admin/shippers');
  })
  .catch((e)=>next(e));
});
//  orders route (GET & POST)
router.get('/orders', (req, res, next)=>{
  res.send('orders worked');
});

module.exports = router;
