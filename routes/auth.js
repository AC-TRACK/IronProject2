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
  console.log(...req.body);
  if (req.body.role === 'CLIENT') {
   return res.redirect('/navbar');
  } 
 return res.redirect('/profile');
});


router.get('/users', async (req, res, next) => {

  const users = await User.find();

  res.render('admin/users', {users});
  
});
  /*User.find((error, users)=>{
    if (error) {
      next(error);
    } else {
      console.log(users);
      res.render('users', {users});
    }
  });*/
  //res.render('admin/users', {error: req.body.error});


router.post('/users', (req, res)=>{
  console.log(req.body);
        User.register(req.body, req.body.password, function(err, user) {
            if (err) return res.send(err);
            const authenticate = User.authenticate();
            authenticate(req.body.email, req.body.password, function(err, result) {
                if (err) return res.send(err);
                return res.redirect('/users');
         });
      });
   });


module.exports = router;
