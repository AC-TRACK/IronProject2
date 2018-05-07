const express = require('express');
const router = express.Router();

router.get('/navbar', (req, res)=>{
  res.render('navbar');
});
router.get('/location', (req, res, next)=>{
  res.send('location worked');
});
router.get('/shippers', (req, res, next)=>{
res.send('shippers worked');
});
router.get('/users', (req, res, next)=>{
res.send('users worked');
});
router.get('/orders', (req, res, next)=>{
  res.send('orders worked');
});

module.exports = router;
