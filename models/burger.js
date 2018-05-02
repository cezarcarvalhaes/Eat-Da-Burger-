var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
      orm.selectAll("burgers", function(result) {
        callback(result);
      });
    },
    // The variables cols and vals are arrays.
    create: function(value, callback) {
      orm.insertOne("burgers", "burger_name", value, function(res) {
        callback(res);
      });
    },
    update: function(value, key, cb) {
      orm.updateOne("burgers", "burger_name", value, key, function(res) {
        cb(res);
      });
    },
  };
  
  module.exports = burger;