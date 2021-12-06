const http = require('http');
const { Server } = require('https');
const fs =require('fs');
const path = require('path')

server = http.createServer((req,res)=>{
    switch (req.url) {
        case '/':
            let  dataOne = path.join(__dirname, 'views/index.html')
            let fileOne = fs.readFileSync(dataOne, 'utf-8')
            res.writeHead(201,{"content-type": "text/html"});
            res.write(fileOne);
            res.end();
            break;
            case '/About-us':
                let dataTwo = path.join(__dirname, 'views/about.html')
                let fileTwo = fs.readFileSync(dataTwo, 'utf-8')
            res.writeHead(201,{"content-type": "text/html"});
            res.write(fileTwo);
            res.end();
            break;

            case '/Contact-us':
                let dataThree = path.join(__dirname, 'views/contact.html')
                let fileThree = fs.readFileSync(dataThree, 'utf-8');
            res.writeHead(201,{"content-type": "text/html"});
            res.write(fileThree);
            res.end();
            
            break;
          
    
        default:
            res.writeHead(404,{"content-type": "text/html"});
            res.write(`<h1 style= "text-align: center; padding-top:20%">The route you requested  ${req.url} was not found</h1>`);
            res.end();
            break;
    }
})

let PORT = 4000;


server.listen(PORT, console.log(`App is running on localhost port ${PORT}`));
