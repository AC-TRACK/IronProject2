const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

locationSchema = new Schema({
    locName: String,
    coord: {
      lat: String, 
      lgn: String
    },
    locType: String, 
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});