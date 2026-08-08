const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 560,
    height: 800,
    frame: false,          // Removes the bulky Windows title bar entirely
    transparent: true,     // Allows glass/blur backgrounds to bleed through
    backgroundMaterial: 'acrylic', // NATIVE WINDOWS ACCYRLIC BLUR ENGINE
    resizable: true,
    hasShadow: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');
  
  // Optional: Set window position to act like a sidebar or widget
  // mainWindow.setAlwaysOnTop(true); 
}

// Window Control Listeners hooked from your HTML buttons
ipcMain.on('window-minimize', () => mainWindow.minimize());
ipcMain.on('window-close', () => mainWindow.close());
ipcMain.on('window-toggle-top', (event, isAlwaysOnTop) => {
  mainWindow.setAlwaysOnTop(isAlwaysOnTop);
});

app.whenReady().then(createWindow);
