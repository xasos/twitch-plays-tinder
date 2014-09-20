var express = require('express')
  , mongoskin = require('mongoskin')
  , bodyParser = require('body-parser')

var app = express()
app.use(bodyParser())
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use("/", express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render("index");
})

app.get('/get', function(req, res) {
    tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, res, body) {
      tinder.get_nearby_users(function(err, res, body) {
        res.send(body);
      })
    });
})

app.get('/update', function(req, res) {
    tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, res, body) {
      if (req.body.isLike === true) {
        tinder.like(req.body.userId, function(err, res, body) {
          var info = JSON.parse(body);
          res.json(info);
        });
      } else {
        tinder.dislike(req.body.userId, function(err, res, body) {
          var info = JSON.parse(body);
          res.json(info);
        });
      }
    });
})

app.get('/changeLocation', function(req, res) {
    tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, res, body) {
      tinder.update_location(req.body.lat, req.body.long, function(err, res, body) {
        res.send(body);
      });
    });
})

app.listen(3000)