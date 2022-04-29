const electron = require("electron");
const url = require("url");
const path = require("path");

const {app,BrowserWindow} = electron;

let mainwindow;

app.on("ready",()=>
{
    mainwindow = new BrowserWindow();

    mainwindow.loadURL(url.format({
        pathname:path.join(__dirname,"popup.html"),
        protocol:"file:",
        slashes:true
    })); 
});
