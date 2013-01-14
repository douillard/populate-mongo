var sys = require('sys');
var exec = require('child_process').exec;
var fs = require('fs');

var n = "9";
var file = n + "users.js";
exec("mongo localhost:27017/E0107 find-users.js", function (error, stdout, stderr) {
    fs.writeFileSync(file, stdout, 'utf8');
});
