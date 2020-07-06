var createError = require('http-errors');
var express = require('express');

//path/users/help
var path = require('path');

//work cookies
var cookieParser = require('cookie-parser');

//logger that prints errors
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

//Library for API
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//all requests are pipied through middlewares
app.use(logger('dev'));
app.use(express.json());//parse json in the body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//parse cookies
//localhost:3000/images/movie.png
app.use(express.static(path.join(__dirname, 'public'))); //public folder


//all requests pass here before they go to any place in site
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept');
  res.setHeader('Access-Control-Allow-Mothods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');

  //continue to the next (Router)
  next();
})

//the default router
app.use('/', indexRouter);
app.use('/api', apiRouter); //route all requests that start with '/api; to our apiRouter.js
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
