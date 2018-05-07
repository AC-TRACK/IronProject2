const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

function isAuthenticated(req,res, next){
  if(req.isAuthenticated()){
      return res.redirect('/profile')
  }
  return next();
};

function isNotAuth(req,res,next){
  if(req.isAuthenticated()){
      return next();
  }
  return res.redirect('/login');
}

router.get('/logout', (req, res, next)=>{
  req.logout();
  res.redirect('/login');
});

router.get('/login', (req, res, next)=>{
res.render('auth/login', {error: req.body.error});
});

router.post('/login',
 passport.authenticate('local'),
(req, res)=>{
  res.redirect('/navbar');
});


router.get('/newuser', (req, res, next) => {
  res.render('auth/newuser', {error: req.body.error});
});

router.post('/newuser', (req, res)=>{
        User.register(req.body, req.body.password, function(err, user) {
            if (err) return res.send(err);
            const authenticate = User.authenticate();
            authenticate(req.body.email, req.body.password, function(err, result) {
                if (err) return res.send(err);
                return res.redirect('/login');
         });
      });
   });


module.exports = router;
