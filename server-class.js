// External server is not included
const { notUsingLocal } = require('./key');
class Server {
    constructor(useLocal, route, host, type) {
        // Use localhost or external server
        this.useLocal = useLocal;
        this.route = route;
        this.host = this.useLocal ? host : notUsingLocal[type];

        // For internal api
        this.internalRoute = '/internal' + this.route;
        this.internalHost = host;
    }
}

class Microservice extends Server {
    constructor(useLocal, route, host) {
        super(useLocal, route, host, 'microservice');
    }
}

class BlockchainService extends Server {
    constructor(useLocal, route, host) {
        super(useLocal, route, host, 'blockchain');
    }
}

class SafeIdService extends Server {
    constructor(useLocal, route, host) {
        super(useLocal, route, host, 'safeid');
    }
}

module.exports = { Microservice, BlockchainService, SafeIdService };