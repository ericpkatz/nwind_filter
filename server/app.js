var express = require('express');
var path = require('path');
var models = require('./db').models;

var app = express();

module.exports = app;

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use('/browser', express.static(path.join(__dirname, '../browser')));

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, '../browser/index.html'));
});

app.get('/api/products/map', function(req, res, next){
  models.Product
    .find()
      .then(function(products){
        var map = products.reduce(function(memo, product){
          memo[product.name[0].toUpperCase()] = true;
          return memo;
        }, {});
        res.send(map);
      });
});

app.get('/api/products/:letter?', function(req, res, next){
  var filter = {};
  if(req.params.letter)
    filter.name = new RegExp('^' + req.params.letter, 'i');
  models.Product
    .find(filter)
      .then(function(products){
        res.send(products);
      });
});

app.get('/api/employees/map', function(req, res, next){
  models.Employee
    .find()
      .then(function(employees){
        var map = employees.reduce(function(memo, employee){
          memo[employee.name[0].toUpperCase()] = true;
          return memo;
        }, {});
        res.send(map);
      });
});

app.get('/api/employees/:letter?', function(req, res, next){
  var filter = {};
  if(req.params.letter)
    filter.name = new RegExp('^' + req.params.letter, 'i');
  models.Employee
    .find(filter)
      .then(function(employees){
        res.send(employees);
      });
});


