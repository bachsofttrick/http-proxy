const express = require('express');
const multer = require('multer');
const https = require('https');
const fs = require('fs');
const router = require('./router');
const logger = require('./logger');
const app = express();
const upload = multer();
let httpsPort = 443;
let port = 80;

// Parse port number. If not defined, use default port
let args = process.argv.slice(2);
if (args[0]) {
  port = parseInt(args[0]);
}

// Load plugins/middlewares
app.use(logger, router);

// Starting http server
app.listen(port, () => {
  console.log(`Reverse proxy server is listening on http://localhost:${port}`);
});

/* Starting https server with self-signed key
/* openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365
/* add -nodes so that passphrase isn't needed
 */
try
{
    const privateKey = fs.readFileSync('./key.pem', 'utf8')
    const certificate = fs.readFileSync('./cert.pem', 'utf8')
    const credentials = { key: privateKey, cert: certificate, passphrase: '1307' }
    https.createServer(credentials, app).listen(httpsPort, () => {
      console.log(`Reverse proxy server is listening on https://localhost:${httpsPort}`);
    });
}
catch
{
    console.log('Please generate key and certificate with openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365');
}

