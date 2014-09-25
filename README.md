twitch-plays-tinder
===
<img align="middle" src="https://raw.githubusercontent.com/xasos/twitch-plays-tinder/master/tinder-server/assets/images/logo.png?token=6235280__eyJzY29wZSI6IlJhd0Jsb2I6eGFzb3MvdHdpdGNoLXBsYXlzLXRpbmRlci9tYXN0ZXIvdGluZGVyLXNlcnZlci9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nIiwiZXhwaXJlcyI6MTQxMTkxNzgxN30%3D--4d4acc25db74d348a37a6de2f2b17c71638ce81d"></img><br>

### Built at Hack the North Fall 2014.

twitch-plays-tinder is a crowdsourced blind dating platform built atop the Tinder/Twitch APIs. The facebook auth tokens used in the Tinder API were sniffed using [Charles](http://www.charlesproxy.com/). To run this, you need to install an app that streams a webview of your screen to Twitch, such as [OBS](https://obsproject.com/). This was originally streamed on Twitch [here](http://www.twitch.tv/twitchplaystinderbot). Inspired by [Twitch Plays Pokémon](http://www.twitch.tv/twitchplayspokemon). 


```sh
# Run the API/Web interface
$ cd tinder-server
$ npm install
$ node app.js
# App is now live at http://localhost:1337/main. 

# Run the key listener for Twitch streaming
$ cd twitch-chat
$ python main.py
```

## Team      
Contributer | Task
--- | ---
[Andrew Breckenridge](andrewsb.github.io) | Twitch Integration
[Henry Boldizsar](http://challengepost.com/users/Gibolt) | Tinder API
[Niraj Pant](https://twitter.com/IamNotShiboYao) | UI + UX
[Andy Fang](http://challengepost.com/users/wchill) | 


## License
[MIT License](LICENSE)

