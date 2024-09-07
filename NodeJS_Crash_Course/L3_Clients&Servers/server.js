const http = require('http');

const server = http.createServer((req,res) => 
{
    console.log('Request made to the server');
})

server.listen(3000,'localhost', ()=> { console.log('Server is lisinig through prot 3000')});
