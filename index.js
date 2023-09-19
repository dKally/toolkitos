// const electron = require('electron')
// const { dialog } = require('electron')
const url = require('url')
const path = require('path')
const {app, BrowserWindow, ipcMain, Menu, globalShortcut} = require('electron')

// const{
//     app, BrowserWindow
// } = electron;

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
    
    globalShortcut.register('Shift+I', () => {
        mainWindow.webContents.openDevTools()
      });
    mainWindow.webContents.openDevTools()


    mainWindow.setTitle('Teste Toolkit OS');

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

app.on('window-all-closed', ()=>{
    console.log("Todas as janelas foram fechadas!")
    app.quit()
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
  });
  
  app.on('will-quit', function () {
    globalShortcut.unregisterAll();
  });

const menuTemplate = [

]