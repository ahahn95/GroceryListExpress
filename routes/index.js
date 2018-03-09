var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const handleError = (res, reason, message, code) => {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home Page')
});

module.exports = router;
