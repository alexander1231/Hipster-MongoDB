var express = require('express'),
    swig = require('swig');
var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');

app.use(express.static('./public'));

var main = require('./app/controllers/main');
var mainController = main(app);

app.get('/', function(req, res){
    res.render('index');
});

var server = app.listen(3000, function () {
    console.log('server listening on port 3000');
});
