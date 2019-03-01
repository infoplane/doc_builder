const remote = require('electron').remote;
const session = require('electron').remote.session;
const app = require('electron').remote.app;
const ipcRenderer = require('electron').ipcRenderer;
const d3 = require('d3');
const d3_request = require('d3-request');

const fs = require("fs");
const geotiff = require("geotiff");



ipcRenderer.on('info', () => {console.log("**********>>>><<<<")});


$(document).ready(function() {
    let width = 680;
    let height = 500;

    let projection = d3.geo

    let canvas = d3.select("map_area").append("canvas")
        .attr("width", width)
        .attr("height", height);
    
    let context = canvas.node().getContext("2d");

    d3_request.request("sx6585_DSM_2M.tiff")
        .responseType('arraybuffer')
        .get(function () {
            
        })
    
});

