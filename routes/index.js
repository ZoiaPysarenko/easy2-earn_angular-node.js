const express = require('express');
const router = express.Router();
// Database Postgre
const { Pool } = require('pg');

//connecting to DB
//the constructor of Pool takes a configuration json object {conncetionString:"",ssl: { rejectUnauthorized: false }}
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//CREATE Table?
router.get('/createtables', function(req, res, next){})


/* GET home page. */
router.get('/', function(req, res, next) {
  //render html
  res.render('index', { title: 'Express!!' }); // name of the ejs file
});

module.exports = router;
