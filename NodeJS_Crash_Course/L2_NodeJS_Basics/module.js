// impoting data from another file 
const {ages, people} = require('./people.js');

console.log(ages, people);

// Can also export something like os which is a built in object in nodeJS
const os = require('os');
console.log(os);