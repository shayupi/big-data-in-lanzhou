var express = require('express');
var router = express.Router();
var News = require('../models/news')

/* GET users listing. */
router.get('/', function(req, res) {
  News.getAll(null,function(err, news) {
    if (err) {
      console.log('error');
    }
    res.jsonp(news);
  });
});

module.exports = router;