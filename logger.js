const logger = (req, res, next) => {
    const today = new Date();
    console.log(today.toLocaleString(), req.method, req.originalUrl);
    if (Object.keys(req.query).length > 0) console.log('query', JSON.stringify(req.query));
    if (Object.keys(req.body).length > 0) console.log('body', JSON.stringify(req.body));
    next();
};

module.exports = logger;