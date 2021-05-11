// External server is not included
const notUsingLocal = require('./key');
class Server {
    constructor(useLocal, route, host) {
        // Use localhost or external server
        this.useLocal = useLocal;
        this.useInternal = false;
        this.route = route;
        this.internalRoute = '/internal' + this.route;
        this.host = this.useLocal ? host : notUsingLocal
    }

    useInternalRoute() {
        this.useInternal = true;
        return this;
    }
}

const serverList = [
    new Server(false, '/activity', 'localhost:4005'),
    new Server(true, '/config', 'localhost:4006'),
    new Server(true, '/member', 'localhost:4002').useInternalRoute(),
    new Server(true, '/mall', 'localhost:4007'),
    new Server(false, '/promotions', 'localhost:4008'),
    new Server(false, '/sale', 'localhost:4004'),
    new Server(false, '/shop', 'localhost:4003'),
    new Server(true, '/user', 'localhost:4001').useInternalRoute(),
    new Server(false, '/van', 'localhost:4009')
];
module.exports = serverList;