var Quotes = require('../models/quotes');


exports.findAllQuotes = function(req, res){
  Quotes.find({}, function(err, quotes){
      res.json(quotes);
  });
}

exports.addQuote = function(req, res){
  var newQuote = new Quotes({
      author: req.body.author,
      quote: req.body.quote,
  });
  newQuote.save(function(err, quote){
      if(!err)
        res.json({message:"Quote Added!"})
  });
}

// //ADD NEW OBJECT THROUGH POST
// app.post('/quote', function(req, res) {
//   if(!req.body.hasOwnProperty('author') ||
//      !req.body.hasOwnProperty('text')) {
//     res.statusCode = 400;
//     return res.send('Error 400: Post syntax incorrect.');
//   }
//   var newQuote = {
//     author : req.body.author,
//     text : req.body.text
//   };
//   quotes.push(newQuote);
//   res.json(true);
// });
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
