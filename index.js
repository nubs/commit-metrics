var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.set('view options', {layout: false});
app.use(express.logger('dev'));

if (!process.env.DATA_URL) {
  throw new Error('You must specify the DATA_URL environment variable.');
}

if (!process.env.CONFIG_URL) {
  throw new Error('You must specify the CONFIG_URL environment variable.');
}

app.get('/', function (req, res) {
  res.render('index.hbs', {layout: false, dataUrl: process.env.DATA_URL, configUrl: process.env.CONFIG_URL});
});

var port = process.env.PORT ? process.env.PORT : 8000;
app.listen(port, function() { console.log('Listening on ' + port); });
