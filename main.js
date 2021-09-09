const { app, BrowserWindow } = require('electron');
const path = require('path')
const Sentry = require('@sentry/electron');

Sentry.init({
	dsn: 'DSN',
  });

// mainUndefined();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        nodeIntegration: false,
        contextIsolation: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nativeWindowOpen: true
        }
    });
  
    win.loadFile('index.html');
    win.openDevTools({ mode: 'detach' })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})