var fs = require('fs');
var path = require('path');
var dir = 'toupload';
var dir1 = 'uploaded';

if (!fs.existsSync(dir)){
    var x = path.join(__dirname,dir);
    fs.mkdirSync(x);
}
if (!fs.existsSync(dir1)){
    var x = path.join(__dirname,dir1);
    fs.mkdirSync(x);
}