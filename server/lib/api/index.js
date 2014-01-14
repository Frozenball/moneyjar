var express   = require('express');
var app       = module.exports = express();
var fs        = require('fs');
var path      = require('path');

app.get('/api/bower', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../bower.json'));
});

app.get('/api/package', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../package.json'));
});

app.get('/api/random', function(req, res) {
  res.send([1, 2].map(function(){
    return ""+Math.random();
  }));
});
