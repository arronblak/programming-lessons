const http = require('http');
const port = 3001;
const server = http.createServer((request, response) => {
  response.end('Hello, server!')
})
server.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server is listening on port ${port}`)
})