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
    enum: ['Wholesaler Facilities', 'Pharmacy', '3PL', 'Own Facilities', 'Government Facilities', 'Other'], 
  }, 
  description: String,
}, {
  timestamps: {
    createdAt: 'created_At',
    updatedAt: 'updatedAt',
  },
});

module.exports = mongoose.model('Location', locationSchema);