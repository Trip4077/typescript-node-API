const express = require('express');
const server = express();

const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send("Server Found");
});

server.listen(port, err => {
    if(err) {
        console.log(err);
    }

    console.log(`Server lisening on port ${port}`);
});