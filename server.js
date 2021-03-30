const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();


// static folder usees PATH to serve static files
app.use(express.static(path.join(__dirname, 'pubilc')));


//server stuff
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000 || process.env.PORT
server.listen(PORT, () => console.log(`Johnny five is alive on port ${PORT}`));

// run when client connects
io.on('connection', socket =>{
    console.log('new WS connection')
});

