const electron = require('electron');
const { dialog } = require('electron')
const url = require('url');
const path = require('path');
const {Menu} = require('electron');

const{
    app, BrowserWindow
} = electron;

app.setName("ToolkitOS")

const isDev = process.env.NODE_ENV !== undefined && process.env.NODE_ENV === "development"? true:false

let mainWindow;
let addWindow;

app.on('ready', function(){
    if(isDev){
        mainWindow = new BrowserWindow({
            width: 1600,
            height: 600,
            /* frame: false, 
            transparent: true, */
            resizable: false,
            webPreferences:{
                nodeIntegration: true,
                contextIsolation: false,
            },
        });

        mainWindow.webContents.openDevTools()

    }else{

        mainWindow = new BrowserWindow({
            width: 1024,
            height: 600,
            /* frame: false, 
            transparent: true, */
            resizable: false,
            webPreferences:{
                nodeIntegration: true,
                contextIsolation: false,
            },
        });
    }

    mainWindow.loadURL(url.format(
        {
            pathname: path.join(__dirname, 'src/recommended/index.html'),
            protocol: 'file',
            slashes: true
        },
    ));
    


    mainWindow.setTitle('Teste Toolkit OS');

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [

]