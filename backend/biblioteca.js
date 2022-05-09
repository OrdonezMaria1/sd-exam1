var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

/*app.get('/biblioteca', function(req, res){
   res.render('form');
});*/

app.set('view engine', 'pug');
app.set('views', './views');


// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/subir-libro', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(3000);