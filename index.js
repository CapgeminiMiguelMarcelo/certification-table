var express = require('express');
var app = express();
const router = express.Router();
const path = require('path');

//require('dotenv').config()

app.set('port', 5000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//app.set('views', __dirname + '/public');

router.get('/', function(request, response) {
  //response.render('index');
  response.sendFile(path.join(__dirname+'/index.ejs'));
});

/*app.listen(app.get('port'), function() {
  console.log("Node app running at localhost:" + app.get('port'));
});*/

app.use('/', router);
app.listen(5000);

//app.listen();
module.exports = app
