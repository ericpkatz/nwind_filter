var app = require('express').Router();
var models = require('../db').models;

module.exports = app;

app.get('/map', function(req, res, next){
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

app.get('/:letter', function(req, res, next){
  var filter = {};
  filter.name = new RegExp('^' + req.params.letter, 'i');
  models.Product
    .find(filter)
      .then(function(products){
        res.send(products);
      });
});

