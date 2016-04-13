var db = require('./server/db');
var Employee = db.models.Employee;
var Product = db.models.Product;
var Promise = require('bluebird');
var faker = require('faker');
db.connect()
  .then(function(){
    return Employee.remove();
  })
  .then(function(){
    var promises = [];
    while(promises.length < 100)
      promises.push(Employee.create({name: faker.name.findName()}));
    return Promise.all(promises);
  })
  .then(function(results){
    console.log(results);
  })
  .then(function(){
    return Product.remove();
  })
  .then(function(){
    var promises = [];
    while(promises.length < 100)
      promises.push(Product.create({name: faker.commerce.productName()}));
    return Promise.all(promises);
  })
  .then(function(results){
    console.log(results);
  });
