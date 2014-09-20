var FACEBOOK_ID = "1553721864851226"
var FACEBOOK_TOKEN = "CAAGm0PX4ZCpsBADkIu3ZC7CpQZBbYDtS7JNw6DlEOsUg8nQeok35RjMqGHtn2eDWlKe9EHIKdkJIClP9ydKZCq56YzIugm4KlpUR0hIwORL5nxbp2cKxUelkfzjU83V1p9juFREmZADRr8PDNDbl8g0jdfovYLpVyMUwFvlcDHnDW0fhL5wGZCoP57ej7qWBLZBIqTcZC3ZBNhjkQapWHOOTwXWqDiWHmLMYZD"

var TinderPro = require('tinder_pro')
var tinder = new TinderPro()

tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, res, body) {
	//error handling
})

function getPotentials(argument) {
	//change location
	tinder.update_location(latitude, longitude, callback)

	//find local users and add to array
	tinder.get_nearby_users(callback)
}

function swipeRight(argument) {
	tinder.like(user_id, callback)
}

function swipeLeft(argument) {
	tinder.dislike(user_id, callback)
}