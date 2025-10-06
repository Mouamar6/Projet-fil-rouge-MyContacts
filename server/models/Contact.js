<<<<<<< HEAD
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

=======
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

>>>>>>> 3d320c97d7f7d18783634c7e23d2c7b67b5e8aed
module.exports = mongoose.model('Contact', contactSchema);