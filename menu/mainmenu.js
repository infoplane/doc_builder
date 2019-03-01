const {Menu} = require('electron');
const {Menuitem} = require('electron');
const {BrowserWindow} = require('electron');
const electron = require('electron');
const app = electron.app;


const template = [
    {
        label: 'File',
        submenu: [
            {label: 'New', click: () => {
                console.log("new clicked");
                const focusedWindow = BrowserWindow.getFocusedWindow();
                focusedWindow.webContents.send('info', {mgs:'hello from main process'});
                }}
            //{label: 'Open', click: SendEvent('file-open')},
            //{label: 'Save', click: SendEvent('file-save')},
            //{label: 'Save As', click: SendEvent('file-save-as')},
            //{label: 'Close', click: SendEvent('file-close')},
            //{type: 'seperator'},
            //{label: 'Quit', click: function() {app.quit();}}
        ]

    },
    {label: 'View', submenu: [
            {label: 'HTML/Markdown', click: () => {console.log("view sub menu")}}
        ]}
];


const menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);