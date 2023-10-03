const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Kuljeet");
})
server.listen(4000);