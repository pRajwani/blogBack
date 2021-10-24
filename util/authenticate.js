const ErrorGenerator = require('./errorGenerator');
const jwtOperations = require('./jwt')
const User = require('../Model/User')


const authenticate = async(req,res, next) =>{
    if(!req.headers.authorization){
        return next(new ErrorGenerator(false, 401, 'Unauthorized'));
    }
    const authHeader = req.headers.authorization;
    if(!authHeader.startsWith('Bearer')){
        return  next(new ErrorGenerator(false, 401, 'Could not find Bearer Token'));
    }
    
    const token = authHeader.split(' ')[1];
    const userId = jwtOperations.verifyToken(token);
    if(!userId){
        return next(new ErrorGenerator(false, 401, 'Invalid Token'));
    }
    const {_id, role} = await User.findById(userId);
    req.user = {_id, role};
    next()
}

module.exports = authenticate