const express = require('express');

const handleAllRequests = (requestObject, responseObject) => {
    console.log('Hi, I just received a request');
    const url = requestObject.url;
    responseObject.setHeader("content-type","text/html");
    
    responseObject.end();
}

const handleHomeRequest = (req, res) => {
    res.send('<h1>Welcome to the homepage <br/> There is no hurry in life <br/> Just keep trying</h1>');
}

const handleLoginRequest = (req, res) => {
    res.send('<h1>Welcome to the Login page</h1>');
}

const handleSignUpRequest = (req, res) => {
    res.send('<h1>Welcome to the Sign Up page</h1>');
}

const handleProfileRequest = (req, res) => {
    res.send('<h1>Welcome to the Profile page</h1>');
}

const server = express();

server.use('/login', handleLoginRequest);

server.use('/signup', handleSignUpRequest);

server.use('/profile', handleProfileRequest);

server.use('/', handleHomeRequest);

server.listen(3000, '127.0.0.1', () => console.log('Server is ready to accept requests'));