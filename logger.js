const logger = (req, res, next) => {
    const today = new Date();
    console.log(today.toLocaleString(), req.method, req.originalUrl);
    if (Object.keys(req.query).length > 0) console.log('query', JSON.stringify(req.query));
    next();
};

module.exports = logger;