/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var FACEBOOK_ID = "1553721864851226"

var FACEBOOK_TOKEN = "CAAGm0PX4ZCpsBAC3x4tcvFeeLJavrDNT2G7NT6XxZCx24PF2ZC6Y1GI5mRx3V6qOX5zc9IGoGDAGEZC5Y1IL5RMpQb17ZAEDQIgqALUlJfc5LdIhY3PRATJLUQEYZCkxZCZBLxrfJ076EmZBOKzq55ocxWnuILU0MM8uAEYsV0QMZAE2BhGmCCHlr2qR1lyJDT6A8ieNHHcVoXSuMzVLMmY5nDzWYhtsfG6ZBsh7yyLMsGcnnnjQ1fcfZCFfihGd2g3ZBtnoZD"


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