const electron = require('electron');
const {app, ipcMain, BrowserWindow, session, dialog} = require('electron');

var fs = require('fs');

let win;

function createWindow() {
    let win = new BrowserWindow({width:800, height: 600});

    win.loadFile('index.html');

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

    require('./menu/mainmenu');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

ipcMain.on('test', () => {
    console.log("//////************>>>>>");
});