const express = require('express');
const router = require('./router');
const logger = require('./logger');
const app = express();
const port = 80;

// Load plugins/middlewares
app.use(logger, router);

// Starting server
app.listen(port, () => {
  console.log(`Reverse proxy server is listening on http://localhost:${port}`);
});