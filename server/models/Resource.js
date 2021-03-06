const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  name: {type: String},
  date: {type: Date, default: Date.now},
  secureUrl: {type: String, trim: true},
  thumbnail: {type: String, trim: true},
  /*owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an owner',
  },*/
});

module.exports = mongoose.model('Resource', resourceSchema);
