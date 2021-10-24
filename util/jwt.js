const jwt = require('jsonwebtoken');
const JWT_SERET = require('../config');

createToken = (id) => {
    const token = jwt.sign({id}, JWT_SERET);
    return token;
}

verifyToken = (token) => {
    const {id} = jwt.verify(token, JWT_SERET);
    return id;
}

module.exports = {
    createToken,
    verifyToken
};