const { join } = require('path');
const express = require('express');
const io = require('socket.io')();
const si = require('systeminformation');

const PORT = 8000;
const app = express();

app.use('/assets', express.static('assets'));
app.get('/process', (_, res) => res.sendFile(join(__dirname + '/pages/process.html')));
app.get('/', (_, res) => res.sendFile(join(__dirname + '/pages/graph.html')));


function listProcess(socket) {
  si.processes().then(data => 
    socket.emit('list-process', data.list.filter(val => val.pcpu)))
}

io.of('/process').on('connection', socket => {  
  const repeat = setInterval(() => listProcess(socket), 2000)  
  socket.on('disconnect', () => clearInterval(repeat));
});


function listCores(socket) {
  si.currentLoad().then(data => socket.emit('list-cores', data.cpus.map(val => val.load)))
}

io.of('/graph').on('connection', socket => {  
  const repeat = setInterval(() => listCores(socket), 1000)  
  socket.on('disconnect', () => clearInterval(repeat));
});


const server = app.listen(PORT, () => {
	console.log(`The application is running at http://localhost:${PORT}`)
	io.attach(server)
});