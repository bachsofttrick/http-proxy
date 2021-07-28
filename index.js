const express = require('express');
const jsonParser = express.json();
const router = require('./router');
const logger = require('./logger');
const app = express();
let port = 80;

// Parse port number. If not defined, use default port
let args = process.argv.slice(2);
if (args[0]) {
  port = parseInt(args[0]);
}

// Load plugins/middlewares
app.use(jsonParser, logger, router);

// Starting server
app.listen(port, () => {
  console.log(`Reverse proxy server is listening on http://localhost:${port}`);
});