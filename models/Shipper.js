const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipperSchema = new Schema({
  typeOfShipper: {
    type: Schema.Types.ObjectId,
    ref: 'Order'
  },
  files: [String],
  currentLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = mongoose.model('Shipper', shipperSchema);