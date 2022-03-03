const http = require("http");
const requestHandler = (request, response) => {
response.end("hi ");
};
http.createServer(requestHandler).listen(9000) 
