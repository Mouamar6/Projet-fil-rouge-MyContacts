<<<<<<< HEAD
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

=======
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

>>>>>>> 3d320c97d7f7d18783634c7e23d2c7b67b5e8aed
module.exports = mongoose.model('User', userSchema);