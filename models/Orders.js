const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    status: {
      type: String,
      enum: ['InProcess','Pending', 'InTransit', 'PickUpAwait']
    },
    typeOfOrder:{
      type:String,
      enum:['newRequirement','shipment','pickUp'],
    }

});