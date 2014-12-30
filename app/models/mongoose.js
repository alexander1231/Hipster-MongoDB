var mongoose = require('mongoose');

var uristring = 'mongodb://localhost/myhipsterdb';

mongoose.connect(uristring);

module.exports = mongoose;
