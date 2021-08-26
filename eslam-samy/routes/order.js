const express = require('express');
const router = express.Router();
const Order = require('../moduls/order')

router.get('/orders',async function(req,res,next){
  const orders = await Order.find().catch(next);
  res.send(orders);
});

router.post('/orders',function(req,res,next){
  Order.create(req.body).then(function(order){
    res.send(order);
  }).catch(next);
});

router.put('/orders/:id',function(req,res,next){
  Order.findByIdAndUpdate(req.params.id, req.body).then(function(order){
    Order.findOne({_id: req.params.id}).then(function(order){
      res.send(order);
    });

  });

});

router.delete('/orders/:id',function(req,res,next){
  Order.findByIdAndRemove( req.params.id).then(function(order){
    res.send(order);
  });
});

module.exports = router;
