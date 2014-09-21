import win32com.client as comclt
 
class Keypresser:
 
    wsh = None;
 
    def __init__(self):
        self.wsh = comclt.Dispatch("WScript.Shell");
    def key_press(self, key):
        self.wsh.SendKeys(key)