const { CareService, Microservice, MicroserviceTenant, BlockchainService, SafeIdService } = require('./server-class');

// Port are in accordance with SQL port (microservice)
const serverList = [
    new Microservice(false, '/activity', 'localhost:4005'),
    new Microservice(false, '/balance', 'localhost:4016'),
    new Microservice(false, '/config', 'localhost:4006'),
    new Microservice(false, '/ecommerce-shop', 'localhost:4010'),
    new Microservice(true, '/integration', 'localhost:4013'),
    new Microservice(true, '/mall', 'localhost:4012'),
    new Microservice(false, '/member', 'localhost:4002'),
    new Microservice(false, '/notification', 'localhost:4007'),
    new Microservice(false, '/promotions', 'localhost:4008'),
    new Microservice(false, '/report', 'localhost:4011'),
    new Microservice(false, '/sale', 'localhost:4004'),
    new Microservice(false, '/shop', 'localhost:4003'),
    new Microservice(false, '/tenant', 'localhost:4012'),
    new Microservice(false, '/user', 'localhost:4001'),
    new Microservice(false, '/van', 'localhost:4009'),
    new MicroserviceTenant(false, '/tenant', 'localhost:4012'),
    new MicroserviceTenant(false, '/user', 'localhost:4012'),
    new CareService(false, '/balance', 'localhost:4016'),
    new CareService(false, '/config', 'localhost:4006'),
    new CareService(false, '/ecommerce-shop', 'localhost:4010'),
    new CareService(false, '/member', 'localhost:4002'),
    new CareService(false, '/notification', 'localhost:4007'),
    new CareService(false, '/promotions', 'localhost:4008'),
    new CareService(false, '/sale', 'localhost:4004'),
    new CareService(false, '/user', 'localhost:4001'),
    new BlockchainService(false, '/api', 'localhost:3000'),
    new SafeIdService(false, '/api', 'localhost:3000')
];

module.exports = serverList;