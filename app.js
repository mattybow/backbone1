
/**
 * Module dependencies.
 */

var express = require('express'),
http = require('http'),
path = require('path');

var app = express();

// all environments
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.use(express.json());
	app.use(express.bodyParser());
	app.use(express.compress());
	app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
	console.log(__dirname);
	app.use(express.static(path.join(__dirname, 'public')));
	app.use('/view', express.static(__dirname + '/public'));
	app.set('view engine', 'html');
});
// development only
//if ('development' == app.get('env')) {
  app.use(express.errorHandler());
//}

app.get('/', function(req,res){
	console.log('homeRoute triggered on express');
	res.sendfile('views/index.html');
});

app.get('/search', function(req,res){
	console.log('searchRoute triggered on express');
	res.sendfile('views/index.html');
});

app.get('/view/:id', function(req,res){
	console.log('vaporRoute triggered on express');
	res.sendfile(path.join(__dirname, 'views/index.html'));
});

app.get('*', function(req, res){
	console.log('Bridge to nowhere');
	res.status(404).sendfile('views/404.html');
});

/*app.post('/user', function(req, res){
	res.send('we are creating user '+req.body.username);
});*/


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
