console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString('Artur'));

var filteredArray = _.uniq(['Mike'])
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);
//
// console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
//     console.log('Unable to write file');
//   }
// });
