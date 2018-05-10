const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    typeOfOrder: {
      type: String,
      enum: ['New Requirement', 'Shipment To:', 'Pick Up'],
    },
    typeOfShipper: {
      type: [String]
      // enum: ['Eco 5L RFG', 'Eco 5L CRT', 'Eco 12L RFG', 'Eco 12L CRT', 'Eco 26L RFG', 'Eco 26L RFG'],
    },
    shippersQtty: [Number],
    initialAddress:String,
    destAddress:String,
    description: String,
}, {
  timestamps: {
    createdAt: 'created_At',
    updatedAt: 'updated_At',
  },
});

module.exports = mongoose.model('Order', orderSchema);

// [{
//   type: Schema.Types.ObjectId,
//   ref: 'Location',
// }]
// [{
//   type: Schema.Types.ObjectId,
//   ref: 'Location',
// }]