const express = require('express');
const bodyparser = require('body-parser');
const server = express();


//middleware configuration
server.use(bodyparser.json());


//routing
server.use('/api/test', require('./routes/test'));
server.use('/',         express.static('./client/dist'));


//boot
server.listen(5000, () => { console.log('server is listening on port 5000') });