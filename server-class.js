// External server is not included
const { notUsingLocal } = require('./key');
class Server {
    constructor(useLocal, route, host, type) {
        // Use localhost or external server
        this.useLocal = useLocal;
        this.type = type;
        this.route = '/' + type + route;
        this.host = useLocal ? host : notUsingLocal[type];

        // For internal api
        this.internalRoute = '/' + type + '/internal' + route;
        this.internalHost = host;
    }
}

class CareService extends Server {
    constructor(useLocal, route, host) {
        super(useLocal, route, host, 'care');
    }
}

class Microservice extends Server {
    constructor(useLocal, route, host) {
        super(useLocal, route, host, 'micro');
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

module.exports = { CareService, Microservice, BlockchainService, SafeIdService };