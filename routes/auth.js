const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

const nodemailer = require('nodemailer');
 let transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth:{
     user: process.env.USER_EMAIL,
     pass: process.env.USER_PASS
   }
 });

// router.get("/confirm/:confirmCode", (req, res, next) =>{
//   User.findOneAndUpdate({confirmationCode: req.params.confirmCode}, {$set: { status: "Active"}})
//   .then(()=> res.redirect("/"))
//   .catch((e)=>console.log(e))
// });

function isAuthenticated(req,res, next){
  if(req.isAuthenticated()){
      return res.redirect('/profile');
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
  console.log(req.body);
 res.redirect('/profile');
});
//			users update & delete
router.get('/users/:id/update', (req, res, next)=>{
	User.findById(req.params.id)
	.then(user=>{
		console.log(user);
		res.render('updates/update', {user});
	})
	.catch((e)=>next(e));

});

router.get('/users/:id/delete', (req, res, next)=>{
User.findByIdAndRemove(req.params.id)
.then(r =>{
	res.redirect('/users');
})
.catch((e)=>next(e));
});

router.get('/users/:id', (req, res, next ) => {
	User.findById(req.params.id)
	.then(user=>{
		res.send(JSON.stringify(user));
	})
	.catch((e)=>res.status(500).json(e));
});



router.post('/users/:id/update', (req, res, next)=>{
console.log(req.params);
User.findByIdAndUpdate(req.params.id, req.body)
.then(r =>{
	res.redirect('/users');
})
.catch((e)=>console.log(e));
});


router.get('/users', async (req, res, next) => {

  const users = await User.find();

  res.render('admin/users', {users});
  
});

router.post('/users', (req, res)=>{
  if (req.body.password !== req.body.password1) {
    return res.render("admin/users", { info: "Las contraseñas no coinciden :(" })
  }
  User.register(new User(req.body), req.body.password, function(err, account) {
    if (err) {
        return res.render("admin/users", { info: "Ese correo ya está registrado :(" });
    }
    const authenticate = User.authenticate();
		
    let message = {
        from: process.env.USER_EMAIL,
        to: req.body.email,
        subject: "Tu código de confirmación",
        html: `<html>
          <head></head>
        <body>
        <div class="email--background">
				<div class="email--container">
			<img src="https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=600&q=600">

			<div class="email--inner-container">
				<p>Your account in CCA-TRACK has been created, please confirm your e-mail</p>
				<a href="http://localhost:3000" class="cta">Click here</a>
			</div>

		</div>

		<div class="footer-junk">
			<a href="#">Unsubscribe</a>
		</div>
	</div>  
  <style>
  $light-grey: #eee;

body {
	font-family: sans-serif;
	background: #fff;
}

.email {
	&--background {
		background: $light-grey;
		padding: 10px;
		text-align: center;
	}

	&--container {
		max-width: 500px;
		background: #fff;
		margin: 0 auto;
		overflow: hidden;
		border-radius: 5px;
	}

	&--inner-container {
		padding: 0 5% 40px;
	}
}

.pre-header {
	@extend .email--container;
	background: $light-grey;
	color: $light-grey;
	font-size: 5px;
}

img {
	max-width: 100%;
	display: block;
}

p {
	font-size: 16px;
	line-height: 1.5;
	color: darken($light-grey, 30);
	margin-bottom: 30px;
}

.cta {
	display: inline-block;
	padding: 10px 20px;
	color: #fff;
	background: #373629;
	text-decoration: none;
	letter-spacing: 2px;
	text-transform: uppercase;
	border-radius: 5px;
	font-size: 13px;
}

.footer-junk {
	padding: 20px;
	font-size: 10px;

	a {
		color: darken($light-grey, 20);
	}
}
    </style>    
       </body>
           </html>`
    }
    transporter.sendMail(message);
    return res.redirect('/users');
    ticateauthen(req.body.email, req.body.password, function(err, result) {
        if (err) return res.send(err);
        return res.send('Oooops, something went wrong!');
    });
});
}); 



   


module.exports = router;
