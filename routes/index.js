var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/widgets', function(req, res, next) {
  res.send(['first post', 'second post', 'third post'])
})

module.exports = router;
