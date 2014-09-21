twitch-plays-tinder
===
<img align="middle" src="https://raw.githubusercontent.com/xasos/twitch-plays-tinder/master/tinder-server/assets/images/logo.png?token=6235280__eyJzY29wZSI6IlJhd0Jsb2I6eGFzb3MvdHdpdGNoLXBsYXlzLXRpbmRlci9tYXN0ZXIvdGluZGVyLXNlcnZlci9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nIiwiZXhwaXJlcyI6MTQxMTkxNzgxN30%3D--4d4acc25db74d348a37a6de2f2b17c71638ce81d"></img><br>
twitch-plays-tinder is a crowdsourced blind dating platform built atop the Tinder/Twitch APIs. The facebook auth tokens used in the Tinder API were sniffed using Charles. Inspired by [Twitch Plays Pokémon](http://www.twitch.tv/twitchplayspokemon). To run this, you need to install an app that streams a webview of your screen, such as [OBS](https://obsproject.com/). This was originally streamed on twitch [here](http://www.twitch.tv/twitchplaystinderbot). Built at Hack the North 2014.

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

## License
[MIT License](LICENSE)

