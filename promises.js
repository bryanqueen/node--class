const util = require('util');
const fs = require('fs');
const path = require('path')

// const promise = new promise((resolve,reject)=>{
//     reject('Bad error')
// })
//     .then((message) =>console.log(message))
//     .catch((err) => console.log(err))

//     let read2 = util.promisify(fs.readFile);
//     let data1 = path.join(__dirname, 'Money/file.txt')

//     read2(data1, 'utf-8')
//     .then((data)=>(console.log(data)))


// let readThree = util.promisify(fs.writeFile);
// let readFour = util.promisify(fs.readFile);
// let dataTwo = path.join(__dirname, 'Money/daniel.txt');

// readThree(dataTwo, 'I am Daniel');
// readFour(dataTwo, 'utf-8')

// .then((data)=>(console.log(data)));

let var1 = util.promisify(fs.mkdir)
let var2 = path.join(__dirname, 'Folder');

var1(var2)
.then((data)=>(console.log(data)));

