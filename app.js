
/**
 * Module dependencies.
 */

var express = require('express'),
http = require('http'),
path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.bodyParser());
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req,res){
	console.log('homeroute triggered on express');
	res.sendfile('views/index.html');
});

app.get('/search', function(req,res){
	console.log('homeroute triggered on express');
	res.sendfile('views/index.html');
});

app.get('*', function(req, res){
	console.log('Bridge to nowhere');
	res.status(404).sendfile('views/404.html');
});

app.post('/user', function(req, res){
	res.send('we are creating user '+req.body.username);
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
