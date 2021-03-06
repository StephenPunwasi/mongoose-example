var Quote = require('../models/quotes');


exports.findAllQuotes = function(req, res){
  Quote.find({}, function(err, quotes){
      res.json(quotes);
  });
}

exports.addQuote = function(req, res){
  var newQuote = new Quote({
      author: req.body.author,
      quote: req.body.quote,
  });
  newQuote.save(function(err, quote){
      if(!err)
        res.json({message:"Quote Added!"})
  });
}


//QUERY BY MONGO ID
exports.getQuoteById = function(req, res){
  Quote.findById(req.params.id,
   function(err, doc){
     res.json(doc);
 });
}

//DELETE QUOTE BY MONGO ID
exports.deleteQuoteById = function(req, res){
  Quote.delete(req.params.id,
   function(err, doc){
     res.json({message: "Quote Deleted!"});
 });
}

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
