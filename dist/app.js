require('dotenv').config();
const server = require('./server');
const port = process.env.PORT || 5000;
server.listen(port, err => {
    if (err) {
        console.log(err);
    }
    console.log(`Server lisening on port ${port}`);
});
//# sourceMappingURL=app.js.map