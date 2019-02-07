const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const normalizePort = port => parseInt(port, 10);

const PORT = normalizePort(process.env.PORT || 3000)

const app = express();
const dev = app.get('env') !== 'production';

if(!dev) {
    app.disable('x-powered-by');
    app.use(compression())
    app.use(morgan('common'))

    app.use(express.static('build'))

    app.use('*', (req, res) => {
        res.sendFile('index.html')
    })
}

if(dev) {
    app.use(morgan('dev'))
}

const server = createServer(app);

server.listen(PORT, err => {
    if(err) throw err
    console.log('Server Started');
})