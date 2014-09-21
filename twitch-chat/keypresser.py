# import win32com.client as comclt
 
# class Keypresser:
 
#     wsh = None;
 
#     def __init__(self):
#         self.wsh = comclt.Dispatch("WScript.Shell");
#     def key_press(self, key):
#         self.wsh.SendKeys(key)


import os
# minimize active window

def key_press(key):
	os.system("osascript -e 'tell application \"Chrome\" to activate'")
	os.system("osascript -e 'tell application \"System Events\" to keystroke \""+ key +"\"'")