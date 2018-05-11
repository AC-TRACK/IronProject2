const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('auth/login');
});

router.get('/users/:id', (req, res, next)=>{
  res.render('admin/profile');
});

router.get('/profile', (req, res, next)=>{
  res.render('profile/profile' );
});
router.get('/ecoflex',(req,res,next)=>{
  res.render('admin/ecoflex');
 });

module.exports = router;
