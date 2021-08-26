const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const OrderSchema = new Schema({
  orderDetails:{
    type : String

  },

  orderNum :{
    type : String
  }
});

const Order = mongoose.model('order',OrderSchema);

module.exports = Order;
