var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var products = [
	{
		name: 'Dark Roast',
		price: 1.92,
		origin: 'Brazil'
	},
	{
		name: 'Darker Roast',
		price: 2.50,
		origin: 'Vietnam'
	},
	{
		name: 'Light Roast',
		price: 1.2,
		origin: 'Indonesia'
	},
	{
		name: 'Lighter Roast',
		price: 2.92,
		origin: 'Colombia'
	}
]


app.get('/', function(req, res) {
	res.render('index', {
		coffeeProducts: products
	});
});

var server = app.listen(9473, function() {
	console.log('Express server listening on port ' + server.address().port);
});
