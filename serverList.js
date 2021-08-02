const { Microservice, BlockchainService, SafeIdService } = require('./server-class');

// Port are in accordance with SQL port (microservice)
const serverList = [
    new Microservice(false, '/activity', 'localhost:4005'),
    new Microservice(false, '/config', 'localhost:4006'),
    new Microservice(false, '/ecommerce-shop', 'localhost:4010'),
    new Microservice(true, '/integration', 'localhost:4013'),
    new Microservice(true, '/mall', 'localhost:4012'),
    new Microservice(false, '/member', 'localhost:4002'),
    new Microservice(true, '/notification', 'localhost:4007'),
    new Microservice(false, '/promotions', 'localhost:4008'),
    new Microservice(false, '/report', 'localhost:4011'),
    new Microservice(false, '/sale', 'localhost:4004'),
    new Microservice(false, '/shop', 'localhost:4003'),
    new Microservice(false, '/user', 'localhost:4001'),
    new Microservice(false, '/van', 'localhost:4009'),
    new BlockchainService(false, '/api/channel', 'localhost:3000'),
    new BlockchainService(false, '/api/orderer', 'localhost:3000'),
    new BlockchainService(false, '/api/organization', 'localhost:3000'),
    new BlockchainService(false, '/api/peer', 'localhost:3000'),
    new SafeIdService(false, '/api/activitylog', 'localhost:3000'),
    new SafeIdService(false, '/api/firebasetoken', 'localhost:3000'),
    new SafeIdService(false, '/api/group', 'localhost:3000'),
    new SafeIdService(false, '/api/notification', 'localhost:3000'),
    new SafeIdService(false, '/api/user', 'localhost:3000'),
    new SafeIdService(false, '/api/userPair', 'localhost:3000'),
    new SafeIdService(false, '/api/userStatusDeclaration', 'localhost:3000'),
];

module.exports = serverList;