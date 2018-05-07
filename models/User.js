const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PassportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  name: String,
  lastName: String,
  rol: {
    type: String,
    enum: ['ADMIN', 'OPS', 'CLIENTS']
  },
    //address: String,
    //phoneNumber: String,
  email: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    },
});

userSchema.plugin(PassportLocalMongoose, {usernameField: 'email'});
module.exports = mongoose.model('User', userSchema);
