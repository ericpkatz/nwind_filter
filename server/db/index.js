var Promise = require('bluebird');
var mongoose = require('mongoose');

var Product = mongoose.model('product', mongoose.Schema({
  name: String
}));

var Employee = mongoose.model('employee', mongoose.Schema({
  name: String
}));


var _conn;
module.exports =  {
  connect: function(){
    if(_conn)
      return _conn;
    return _conn = new Promise(function(resolve, reject){
      mongoose.connect(process.env.CONN, function(err){
        if(err)
          return reject(err);
        return resolve(mongoose.connection);
      });
    });
  
  },
  models: {
    Product: Product,
    Employee: Employee
  }
};
