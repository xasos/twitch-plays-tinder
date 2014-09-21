import os 
class Keypresser:
# minimize active window

	def key_press(key):
		os.system("osascript -e 'tell application \"Chrome\" to activate'")
		os.system("osascript -e 'tell application \"System Events\" to keystroke \""+ key +"\"'")