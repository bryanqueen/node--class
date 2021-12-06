const path = require('path');
const fs = require('fs');
const util = require('util')

let var1 = util.promisify(fs.mkdir)
let writeOne = util.promisify(fs.writeFile);
let pathOne = path.join(__dirname, 'Valerian/wirte.txt');
let writeTwo = util.promisify(fs.readFile);


var1('Valerian')
writeOne(pathOne, 'bdifgifgaif')
writeTwo(pathOne, 'utf-8')

.then((message)=>{
    console.log(message);
})