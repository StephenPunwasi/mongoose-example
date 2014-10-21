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
app.get('/', quotes.findAllQuotes);
app.post('/quote', quotes.addQuote);
app.get('/quote/:id', quotes.getQuoteById);
app.post('/quote/:id', quotes.deleteQuoteById);

app.listen(3000);
console.log('Server running on port 3000');
