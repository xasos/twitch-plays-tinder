#Define the imports
import twitch
import keypresser
t = twitch.Twitch();
k = keypresser.Keypresser();
 
#Enter your twitch username and oauth-key below, and the app connects to twitch with the details.
#Your oauth-key can be generated at http://twitchapps.com/tmi/
username = "TwitchPlaysTinderBot";
key = "oauth:b2f5xe5127t6rcpy5a9uy1kn8kyfzop";
t.twitch_connect(username, key);
 
#The main loop
while True:
    #Check for new mesasages
    new_messages = t.twitch_recieve_messages();
 
    if not new_messages:
        #No new messages...
        continue
    else:
        for message in new_messages:
            #Wuhu we got a message. Let's extract some details from it
            msg = message['message'].lower()
            username = message['username'].lower()
            print(username + ": " + msg);
 
            #This is where you change the keys that shall be pressed and listened to.
            #The code below will simulate the key q if "q" is typed into twitch by someone
            #.. the same thing with "w"
            #Change this to make Twitch fit to your game!
            if msg == "l": k.key_press("l");
            if msg == "r": k.key_press("r");