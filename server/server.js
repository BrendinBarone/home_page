var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require( 'path' );
var port = process.env.PORT || 5036;

app.use(bodyParser.urlencoded({extended: true}));


// Serve back static files by default
app.get('/*', function(req, res) {
  var file = req.params[0] || '/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});
