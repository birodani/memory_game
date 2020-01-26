const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const Schema = mongoose.Schema;

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between 3 and 50 characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];

const score = new Schema({
  name: { type: String, required: true, validate: nameValidator},
  time: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }

});

score.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model('ScoreBoardItem', score );
