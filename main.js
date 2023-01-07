
const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');
const PythonShell = require('python-shell');

const isDev = !app.isPackaged;

function createWindow() {
  var python = require('child_process').spawn('python', ['./fifo.py']);
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady().then(createWindow)
