const http = require("http");
const requestHandler = (request, response) => {
    response.end("Hi!");
};
http.createServer(requestHandler).listen(9000);