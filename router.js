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
    // Print list of servers to check for accuracy
    console.log(`[${server.route}]`, server.host);
    router.use(server.route, proxy(server.host, options));
    if (server.useInternal) {
        console.log(`[${server.internalRoute}]`, server.host);
        router.use(server.internalRoute, proxy(server.host, options));
    }
}

module.exports = router;