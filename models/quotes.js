var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
    author   : {
      type   : String
    },
    quote    : {
      type   : String
    }
});

module.exports = mongoose.model('Quote', quoteSchema);
