"use strict";
const express = require('express');
const server = express();
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
//Middleware
server.use(express.json(), helmet(), cors(), logger('dev'));
server.get('/', (req, res) => {
    res.send("Server Found");
});
module.exports = server;
//# sourceMappingURL=server.js.map