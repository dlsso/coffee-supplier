var express = require('express');
var bodyParser = require('body-parser');
var products = require('./models/products')


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());




app.get('/', function(req, res) {
	res.render('index', {
		coffeeProducts: products
	});
});

var server = app.listen(9473, function() {
	console.log('Express server listening on port ' + server.address().port);
});
