//setup our server , a constant because the server never changes
const http = require('http');

const port = process.env.PORT || 4000;

const server = http.createServer((request,response) => {
//get the URL 
const path = request.url;

if((path == "") || (path == "/")){
    response.writeHead(200, {"Constant-Type" : "Text/Plain"});
    response.end("Home Page");

}else if(path == "/about"){
    response.writeHead(200, {"Constant-Type" : "Text/Plain"});
    response.end("About Page");

}else if(path == "/contact"){
    response.writeHead(200, {"Constant-Type" : "Text/html"});
    response.end("<h1>Contact Us </h1>");

}else{
    response.writeHead(404, {"Constant-Type" : "Text/Plain"});
    response.end("Not Found");
}
});

//start the server 
server.listen(port,() => console.log("server started on port" + port + "press ctrl + c to stop"));
