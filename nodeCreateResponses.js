var sys = require('sys');
var exec = require('child_process').exec;
var fs = require('fs');

exec("mongo localhost:27017/E0107 create-responses.js", function (error, stdout, stderr) {
    console.log(stdout);
});
