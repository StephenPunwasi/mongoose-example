var mongoose = require('mongoose'),
    database = require('./config/database');

//
mongoose.connect(database.url);
