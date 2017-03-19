const {TouchBar} = require('electron')

const {TouchBarLabel, TouchBarButton, TouchBarSpacer} = TouchBar

module.exports = function(win) {
  const playPause = new TouchBarButton({
    label: 'Play/Pause',
    click: () => {
      win.webContents.send('play-pause')
    }
  })

  const forward = new TouchBarButton({
    label: 'Forward',
    click: () => {
      win.webContents.send('forward')
    }
  })

  const backward = new TouchBarButton({
    label: 'Backward',
    click: () => {
      win.webContents.send('backward')
    }
  })
  const label = new TouchBarLabel()
  label.label = "Pocket Casts"
  return new TouchBar([
    label,
    new TouchBarSpacer({size: 'large'}),
    playPause,
    forward,
    backward,
  ])
}