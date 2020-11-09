const http = require('http');
const port = 12345;

const server = http.createServer((request, response) => {
  // response.write('<h1>hello world</h1>');
  // response.end();

  // console.log(request.method);
  // console.log(request.url);
  const route = `${request.method} ${request.url}`;
  
  switch(route) {
    case 'GET /users':
      response.end('all the users!');
      break;
    case 'GET /maps':
      response.end('all the maps!!');
      break;
    default:
      response.end('no webpage found');
  }

  // response.end('<h1>goodbye?</h1>');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
