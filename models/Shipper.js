const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipperSchema = new Schema({

}, {
})




// const shipperSchema = new Schema({
//   shipperName: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Order',
//   }],
//    status: {
//      type: String,
//      enum: ['InPlace', 'InTransit', 'InDestination', 'OnReturn', 'OnInspection'],
//    },
//    initialLocation: [{
//      type: Schema.Types.ObjectId,
//       ref: 'Order',
//    }],
//    currentLocation: String,
//    destLocation: [{
//     type: Schema.Types.ObjectId,
//     ref:'Order',
//   }],
// }, {
//    timestamps: {
//        createdAt: 'created_At',
//        updatedAt: 'updated_At',
//    },
// });

module.exports = mongoose.model('Shipper', shipperSchema);