var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');

var routes = require('./routes/index');


var app = express();

// view engine setup
app.engine('html',swig.renderFile);

app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'html');
swig.setDefaults({ cache: false });


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routes);



module.exports = app;
