const http = require('http');

const handleAllRequests = (requestObject, responseObject) => {
    console.log('Hi, I just received a request');
    const url = requestObject.url;
    if (url == '/') {
        responseObject.write('<html><body style="background-color:cyan; color:white"><h1>Welcome to the homepage <br/> There is no hurry in life <br/> Just keep trying</h1><br/></body></html> ');
    }else if (url == '/login'){
        responseObject.write('<html><body style="background-color:red; color:white"><h1>Welcome to the login page</h1></body></html>\n');
    }else if (url == '/signup'){
        responseObject.write('<html><body style="background-color:red; color:white"><h1>Welcome to the sign up page</h1></body></html>\n');
    }else {
        responseObject.write('<html><body style="background-color:red; color:white"><h1>Error 404, Page not found</h1></body></html>\n');
    }
    responseObject.end();
}

const server = http.createServer(handleAllRequests);

server.listen(3000, '127.0.0.1', () => console.log('Server is ready to accept requests'));