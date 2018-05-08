const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const shipperSchema = new Schema({
  shipperName: {
    type: String,
    enum: ['Eco 5L RFG', 'Eco 5L CRT', 'Eco 12L RFG', 'Eco 12L CRT', 'Eco 26L RFG', 'Eco 26L RFG'],
    required: true,
   },
   status: {
     type: String,
     enum: ['InPlace', 'InTransit', 'InDestination', 'OnReturn', 'OnInspection']
   },
   receptionLocation: [Schema.Type.ObjectID],
   shippmentLocation: {
     type: String,
     coordinates: [],
     owner: String,
     date: Date,
},
}, {
   timestamps: {
       createdAt: 'created_At',
       updatedAt: 'updated_At',
   },
});

module.exports = mongoose.model('Shipper', shipperSchema);