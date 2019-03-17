const { app, BrowserWindow, TouchBar, globalShortcut } = require('electron')
const cpuFreeMemory = require('./src/cpuFreeMemory')
const { TouchBarButton } = TouchBar





let window

app.once('ready', async () => {

const  freeMemory = await cpuFreeMemory
  console.log(freeMemory)
  // Spin button
  const spin = new TouchBarButton({
    label: freeMemory.toString(),
    backgroundColor: '#7851A9'
  })

  const touchBar = new TouchBar([
    spin
  ])
  window = new BrowserWindow({
    frame: false,
    titleBarStyle: 'hiddenInset',
    width: 0,
    height: 0,
    opacity: 1,
    skipTaskbar: true,
    alwaysOnTop: true
  })
  window.loadURL('about:blank')
  window.setTouchBar(touchBar)
  const shortcut = globalShortcut.register('Command+m', () => {
    window.show();
  });

  if (!shortcut) { console.log('Registration failed.'); }
})
