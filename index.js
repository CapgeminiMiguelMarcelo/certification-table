var express = require('express');
var app = express();
const router = express.Router();
const path = require('path');

//require('dotenv').config()

app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

router.get('/', function(request, response) {
  //response.render('index');
  response.render('index');
});

/*app.listen(app.get('port'), function() {
  console.log("Node app running at localhost:" + app.get('port'));
});*/

app.use('/', router);
app.listen(process.env.PORT || 3000);

//app.listen();
module.exports = app
