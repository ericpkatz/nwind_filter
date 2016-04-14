var app = require('express').Router();
var models = require('../db').models;

module.exports = app;

app.get('/map', function(req, res, next){
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

app.get('/:letter', function(req, res, next){
  var filter = {};
  filter.name = new RegExp('^' + req.params.letter, 'i');
  models.Employee
    .find(filter)
      .then(function(employees){
        res.send(employees);
      });
});
