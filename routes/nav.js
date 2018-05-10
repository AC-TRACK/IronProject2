const express = require('express');
const router = express.Router();
const Location = require('../models/Location');
const Order = require('../models/Order');
const User = require('../models/User');

router.get('/profile', (req, res, next)=>{
res.render('admin/profile');
});

router.get('/navbar', (req, res)=>{
  res.render('navbar');
});

//  location route (GET & POST)
router.post('/location/:id/update', (req, res, next)=>{
  console.log(req.params);
  Location.findByIdAndUpdate(req.params.id, req.body)
  .then(r =>{
    res.redirect('/location');
  })
  .catch((e)=>console.log(e));
  });

router.get('/location/:id/update', (req, res, next)=>{
Location.findById(req.params.id)
	.then(location=>{
		res.render('updates/update-loc', {location});
	})
	.catch((e)=>next(e));

});

router.get('/location/:id/delete', (req, res, next)=>{
Location.findByIdAndRemove(req.params.id)
.then(r =>{
	res.redirect('/location');
})
.catch((e)=>next(e));
});

router.get('/location/:id', (req, res, next)=>{
Location.findById(req.params.id)
.then(location=>{
  res.send(JSON.stringify(location));
})
.catch((e)=>res.status(500));
});

router.get('/location', async (req, res, next)=>{
const locations = await Location.find();
res.render('admin/location', {locations});
});


router.post('/location', (req, res, next)=>{
  Location.create(req.body)
  .then((location)=>{
    console.log(location);
    res.redirect('/location');
  })
  .catch((e)=>next(e));
});
//  shippers route (GET & POST)
router.get('/shippers', (req, res, next)=>{
res.render('admin/shippers');
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
router.post('/orders/:id/update', (req, res, next)=>{
  console.log(req.params);
 Order.findByIdAndUpdate(req.params.id, req.body)
  .then(r =>{
    res.redirect('/orders');
  })
  .catch((e)=>console.log(e));
  });

router.get('/orders/:id/update', async (req, res, next)=>{
const locations = await Location.find();
Order.findById(req.params.id)
	.then(order=>{
		res.render('updates/update-ord', {order, locations});
	})
	.catch((e)=>next(e));

});

router.get('/orders/:id/delete', (req, res, next)=>{
Order.findByIdAndRemove(req.params.id)
.then(r =>{
	res.redirect('/orders');
})
.catch((e)=>next(e));
});

router.get('/orders/:id', (req, res, next)=>{
Order.findById(req.params.id)
.then(order=>{
  res.send(JSON.stringify(order));
})
.catch((e)=>res.status(500));
});

router.get('/orders', async (req, res, next)=>{
  const locations = await Location.find();
  const orders = await Order.find();
  const users = await User.find();
  res.render('admin/orders', {locations,orders, users});
});

router.post('/orders', (req, res, next)=>{
  Order.create(req.body)
  .then((order)=>{
    res.redirect('/orders');
  })
 .catch((e)=>next(e));
});

module.exports = router;
