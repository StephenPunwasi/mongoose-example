var mongoose  = require('mongoose'),
    express   = require('express'),
    bodyParser= require('body-parser'),
    db        = require('./config/database');

//

var app = express();
//mongoose.connect(database.url);

//ADD BODY PARSER TO CONSUME JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//TEST OBJECTS IN ARRAY
var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

//RETURN ALL AS JSON
app.get('/', function(req, res) {
  res.json(quotes);
});



//ADD NEW OBJECT THROUGH POST
app.post('/quote', function(req, res) {
  if(!req.body.hasOwnProperty('author') ||
     !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }
  var newQuote = {
    author : req.body.author,
    text : req.body.text
  };
  quotes.push(newQuote);
  res.json(true);
});

//DELETE AN OBJECT
app.delete('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  quotes.splice(req.params.id, 1);
    res.json(true);
});

app.get('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
var q = quotes[req.params.id];
  res.json(q);
});

//PULL RANDOM OBJECT
app.get('/quote/random', function(req, res) {
  var id = Math.floor(Math.random() * quotes.length);
  var q = quotes[id];
  res.json(q);
});


app.listen(3000);
