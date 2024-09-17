const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const { text } = require('stream/consumers');
const { sign } = require('crypto');

const server = http.createServer((req,res) => 
{ 
    console.log('Request made to the server');
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text\html');
    let path = './views/';
    switch(req.url)
    {
        case '/':
            path += 'index.html';
            res.statusCode = 200;   break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;   break;
        case '/about-me':
            res.setHeader('Location','/about');
            res.statusCode = 301;
            res.end();   break;
        default:
            path += '404.html';
            res.statusCode = 404;     break;
    }
    fs.readFile(path,(err, data) =>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.write(data);
            res.end();
        }
    })
})

server.listen(3000,'localhost', ()=> 
{ 
    console.log('Server is lisinig through prot 3000')
});


