const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  locName: String,
  address: String,
  cName: String,
  cEmail: String,
  cTelephone: String,
  locType: {
    type: String,
    enum: ['Wholesaler Facilities', 'Pharmacy', '3PL', 'Own Facilities', 'Government Facilities', 'Other'] 
  }, 
  description: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: {
    createdAt: 'created_At',
    updatedAt: 'updatedAt',
  },
});

module.exports = mongoose.model('Location', locationSchema);



//Location.find({}, {locName: 1}, {_id: 0})