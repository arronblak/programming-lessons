
var fs = require("fs");

setInterval(function(){
    fs.appendFile("app.log");

};