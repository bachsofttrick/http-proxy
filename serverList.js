// External server is not included
const notUsingLocal = require('./key');
class Server {
    constructor(useLocal, route, host) {
        // Use localhost or external server
        this.useLocal = useLocal;
        this.route = route;
        this.host = this.useLocal ? host : notUsingLocal;

        // For internal api
        this.internalRoute = '/internal' + this.route;
        this.internalHost = host;
    }
}

const serverList = [
    new Server(false, '/activity', 'localhost:4005'),
    new Server(true, '/config', 'localhost:4006'),
    new Server(true, '/integration', 'localhost:4011'),
    new Server(false, '/mall', 'localhost:4010'),
    new Server(false, '/member', 'localhost:4004'),
    new Server(true, '/notification', 'localhost:4007'),
    new Server(false, '/promotions', 'localhost:4008'),
    new Server(true, '/sale', 'localhost:4002'),
    new Server(true, '/shop', 'localhost:4003'),
    new Server(false, '/user', 'localhost:4001'),
    new Server(false, '/van', 'localhost:4009')
];

module.exports = serverList;