const fs = require("fs");
fs.writeFileSync('note.txt', 'Hello World!');
fs.appendFileSync('note.txt', '\n Good Morning!');

const methods = require('./extand');

methods.data.frontEnd();
methods.data.backEnd();