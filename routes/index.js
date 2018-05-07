const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('auth/login');
});

router.get('/profile', (req, res, next)=>{
  res.render('admin/profile');
});

module.exports = router;
