const ErrorGenerator = require('./errorGenerator')

const errorHandler = (error, req, res) => {
    const status = error.status || error.message?400:500;
    const message = error.message || 'Internal server error';
    const err = new ErrorGenerator(false, status, message);
    res.status(status).json(err);
}

module.exports = errorHandler