var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer=require('multer');
var upload=multer({dest:'uploads/'})
mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
routes = require(process.cwd() + '/routes.js');
var dbConfig=require(process.cwd() + '/config/database.js');
var enConfig=require(process.cwd() + '/config/envionment.js');

// connect to mongoose
mongoose.connect(dbConfig.connectUrl,function(err,res){
if(err){
  console.log('Error connecting to MongoDB (MongoLab)');
  console.log(err);
}
else{
  console.log('sucess connected');
}
});
var app = express();

var router=express.Router();
routes.init(router);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use(express.static('public'));
app.listen(enConfig.port,function(){
  console.log('server started at port  '+ enConfig.port);
});

module.exports = app;
