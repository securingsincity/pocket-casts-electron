const {app, BrowserWindow, globalShortcut} = require('electron')


const path = require('path')

const url = require('url')
let $ = require('jQuery');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    title: "Pocketcasts",
    height: 750,
    'node-integration': true,
    "web-preferences": {
        "web-security": false,
        "allow-running-insecure-content": true,
        "allow-displaying-insecure-content": true,
        "allow_displaying_insecure_content": true
    }
  })
  win.$ = $;
  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  const touchBar = require('./touchbar')(win)
  win.setTouchBar(touchBar)

  globalShortcut.register('MediaPlayPause', () => {
    win.webContents.send('play-pause')
  })

  globalShortcut.register('MediaPreviousTrack', () => {
    win.webContents.send('backward')
  })

  globalShortcut.register('MediaNextTrack', () => {
    win.webContents.send('forward')
  })


  app.commandLine.appendSwitch('ignore-certificate-errors', 'true');
  // and load the index.html of the app.
  // win.loadUrl('http://play.pocketcasts.com/web');

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('MediaPlayPause')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
