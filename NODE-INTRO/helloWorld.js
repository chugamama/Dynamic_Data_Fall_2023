//setup our server , a constant because the server never changes
const http = require('http');
//we just turned this into a node object 

const port = process.env.PORT || 3000;
//the || lets node know that if we have the begginign part we use that but if not we use the 3000. Define the port the app will be accessing from (80, 8080, 8888 are default to the domain )

const server = http.createServer((request,response) => {
    response.writeHead(200, {"Constant-Type" : "Text/Plain"});
    response.end("Hello World!");
});
//for short it can be req and res. response is what it will do depending on what the request is 

server.listen(port,() => console.log("server started on port" + port + "press ctrl + c to stop"));
//start the server 