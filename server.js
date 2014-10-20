//REQUIREMENTS
var mongoose  = require('mongoose'),
    express   = require('express'),
    bodyParser= require('body-parser'),
    db        = require('./config/database');

//CONTROLLERS
var quotes = require('./controllers/quotes');

var app = express();
mongoose.connect(db.url);

//ADD BODY PARSER TO CONSUME JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



//
// //DELETE AN OBJECT
// app.delete('/quote/:id', function(req, res) {
//   if(quotes.length <= req.params.id) {
//     res.statusCode = 404;
//     return res.send('Error 404: No quote found');
//   }
//   quotes.splice(req.params.id, 1);
//     res.json(true);
// });
//
// app.get('/quote/:id', function(req, res) {
//   if(quotes.length <= req.params.id || req.params.id < 0) {
//     res.statusCode = 404;
//     return res.send('Error 404: No quote found');
//   }
// var q = quotes[req.params.id];
//   res.json(q);
// });
//
// //PULL RANDOM OBJECT
// app.get('/quote/random', function(req, res) {
//   var id = Math.floor(Math.random() * quotes.length);
//   var q = quotes[id];
//   res.json(q);
// });

app.get('/', quotes.findAllQuotes);
app.post('/quote', quotes.addQuote);
app.get('/quote/:id', quotes.getQuoteById);

app.listen(3000);
console.log('Server running on port 3000');
