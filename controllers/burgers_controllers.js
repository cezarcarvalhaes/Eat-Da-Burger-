var express = require('express');

var burger = require('../models/burger.js');

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var handlebarsObj = {
        burgers: data
      };
      console.log(handlebarsObj);
      res.render("index", handlebarsObj);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(
      req.body, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var key = "id = " + req.params.id;
  
    console.log("id:", key);
  
    burger.update({
      burger_name: req.body.name
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
   
  // Export routes for server.js to use.
  module.exports = router;