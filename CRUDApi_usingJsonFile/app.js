const http = require('http');
const express = require('express');

var cors = require('cors');
const itemsRouter = require('./routes/items');

const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}));

app.use('/items', itemsRouter);

app.use('/', (req, res) => {    
    res.send('I can I will!');    
});

const server = http.createServer(app);

server.listen(3000);