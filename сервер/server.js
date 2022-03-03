
const http = require("http");
const requestHandler = (request, response) => {
response.setHeader("Content-Type", "text/html; charset=utf-8;");
 
if(request.url === "/error" || request.url === "/"){
    response.write("<h2>error</h2>");
    }
    else if(request.url == "/error2"){
    response.write("<h2>error2</h2>");
}
else{
response.write("<h2>Not found</h2>");
}
response.end();
};
http.createServer(requestHandler).listen(9000)