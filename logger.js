const logger = (req, res, next) => {
    const today = new Date();
    console.log(today.toLocaleString(), req.method, req.originalUrl);
    next();
};

module.exports = logger;