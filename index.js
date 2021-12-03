const path = require('path');
const fs = require('fs');

// let fileOne = path.join(__dirname, 'Project/Client');
// fs.mkdir(fileOne, (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('Client folder has been sucessfully created')
// });

// let fileTwo = path.join(__dirname, 'Project/Server')
// fs.mkdir(fileTwo, (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('Server folder has sucessfully been created')
// })

// let fileThree = path.join(__dirname, 'Project/Server/routes')
// fs.mkdir(fileThree, (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('routes folder was sucessfuylly created')
// })

// let fileFour = path.join(__dirname, 'Project/Server/controller')
// fs.mkdir(fileFour, (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('Controller folder has been created')
// })
// let fileFive = path.join(__dirname, 'Project/Server/models')
// fs.mkdir(fileFive, (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('Models folder has been created ')
// })
// let fileSix = path.join(__dirname, 'Project/Client/views')
// fs.mkdir(fileSix, (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('View folder has sucessfully been created')
// })

// let fileSeven = path.join(__dirname, 'Project/Client/css/index.css')
// fs.writeFile(fileSeven, 'yo world', (err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('Css folder has been sucessfully created')
// })

let fileEight = path.join(__dirname, 'Project/Client/css/')
fs.mkdir(fileEight, (err)=>{
    if (err) {
        throw err;
    }
    fs.writeFile(fileEight + 'style.css', 'gjfgaifha', (err)=>{
        if (err) throw err;
        console.log('A new file has been created and written to');
    });

})
let fileNine = path.join(__dirname, 'Project/Client/js/')
fs.writeFile(fileNine + 'script.js', 'I love coding sha', (err)=>{
     if (err) {
         throw err;
     }
     console.log('script.js has been created')    
    }
)


