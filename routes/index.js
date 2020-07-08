const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  //render html
  res.render('index', { title: 'Express!!' }); // name of the ejs file
});

module.exports = router;
