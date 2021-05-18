// Route Assignment
const express = require('express');
const proxy = require('express-http-proxy');
const serverList = require('./serverList');
const router = express.Router();

const options = {
    proxyReqPathResolver: (req) => {
        return req.originalUrl;
    }
};

for (const server of serverList) {
    // Print list of servers to check for accuracy (external only)
    console.log(`[${server.route}]`, server.host);
    router.use(server.route, proxy(server.host, options));
    router.use(server.internalRoute, proxy(server.internalHost, options));
}

module.exports = router;