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

/* CREATE Table only once */
// router.get('/createemployeestable', function(req, res, next){

//   const sql = "CREATE TABLE Employees(id SERIAL, title TEXT, description TEXT, imageUrl TEXT);"

//   pool.query(sql, function(err, dbResponse){
//     if(err){
//       res.json(err);
//       return;
//     }else{
//       return res.json(dbResponse);
//     }
//   })
// })

/* CREATE Table only once */

router.get('/employees', function(req, res, next){

  const sql = "SELECT * FROM Employees";

  pool.query(sql, function(err, dbRes){
    if(err){
      return res.json(err)
    }
    console.log(dbRes)
  })

});

/* GET home page. */
router.get('/', function(req, res, next) {
  //render html
  res.render('index', { title: 'Express!!' }); // name of the ejs file
});

module.exports = router;
