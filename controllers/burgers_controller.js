var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", function(req, res) {
    if (!req.params.id) console.log(req.params);
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
	console.log(req.params.id);
	burger.updateOne({devoured: req.body.devoured}, condition, function(result) {
		if(result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});


  module.exports = router;
  