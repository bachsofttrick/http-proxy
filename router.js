// Route Assignment
const express = require('express');
const proxy = require('express-http-proxy');
const { distFolder } = require('./key');
const serverList = require('./serverList');
const router = express.Router();

const options = {
    limit: null,
    proxyReqPathResolver: (req) => {
        return req.originalUrl;
    }
};

for (const server of serverList) {
    // Print list of servers to check for accuracy
    console.log(`[${server.route}]`, server.host);
    router.use(server.route, proxy(server.host, options));
    router.use(server.internalRoute, proxy(server.internalHost, options));
}

// For Loopback API Explorer
router.use('/explorer', proxy('localhost:3000', options));
    
// Frontend route (History mode enabled)
router.use(express.static(`${distFolder}`));
router.use('/*', (req, res) => {
    res.sendFile(`${distFolder}index.html`);
});

module.exports = router;