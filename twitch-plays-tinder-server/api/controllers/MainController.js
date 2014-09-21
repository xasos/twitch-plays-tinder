/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var FACEBOOK_ID = "1553721864851226"

var FACEBOOK_TOKEN = "CAAGm0PX4ZCpsBANsiZASqH8QIzqZAf0TZCP1OtfpEgZB7mkCAApoS9rl7qVZAnpsj2NoJ8cCIlBK4SI0razZCg2UQJUtyZAzNhlDrV4vxeuxbk26IpKZACjrpCufIyUxa8DqXqkW3CaFdNhdGDjeUGLEPomUqcXQEmiHsZCvQXdF9qqux99g4NAdDsmdo2FUmURjNDZCn04niTgJ2pXI0PBZAU5vTr7ZBnKPCOtzWtPnFHw4RUiHAOjZBHc6SES1sGsZC2mdyUZD"

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