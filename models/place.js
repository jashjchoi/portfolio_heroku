const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  Name: {
    type: String,
  }
  
});
const DownTown = mongoose.model('Downtown', placeSchema, 'Downtown');
module.exports = DownTown;
