/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var FACEBOOK_ID = "1553721864851226"

var FACEBOOK_TOKEN = "CAAGm0PX4ZCpsBADkIu3ZC7CpQZBbYDtS7JNw6DlEOsUg8nQeok35RjMqGHtn2eDWlKe9EHIKdkJIClP9ydKZCq56YzIugm4KlpUR0hIwORL5nxbp2cKxUelkfzjU83V1p9juFREmZADRr8PDNDbl8g0jdfovYLpVyMUwFvlcDHnDW0fhL5wGZCoP57ej7qWBLZBIqTcZC3ZBNhjkQapWHOOTwXWqDiWHmLMYZD"

var TinderPro = require('tinder_pro')
var tinder = new TinderPro()
var bodyParser = require('body-parser')


module.exports = {

  index: function(req, res, next) {
    res.view('main/index');
  },

  get: function(req, res, next) {
    tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, r, body) {
      tinder.get_nearby_users(function(err, r, body) {
        res.json(body);
      })
    });
  },

  update: function(req, res, next) {
    tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, r, body) {
      if (req.param('isLike') === true) {
        tinder.like(req.param('userId'), function(err, r, body) {
          res.json(body);
        });
      } else {
        tinder.dislike(req.param('userId'), function(err, r, body) {
          res.json(body);
        });
      }
    });
  },

  changeLocation: function(req, res, next) {
    tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, r, body) {
      tinder.update_location(req.param('lat'), req.param('long'), function(err, r, body) {
        res.json(body);
      });
    });
  }

};