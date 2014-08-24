var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send("A fully-functioning .json database awaits you, POST or GET today!");
});

require('./routes/routes')(app);

app.listen(process.env.PORT || 3000);
