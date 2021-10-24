const bcrypt = require('bcrypt');
const User = require('../Model/User');
const jwtOperations = require('../util/jwt');
const ErrorGenerator = require('../util/errorGenerator');

const registerUser = async (req) => {
    const {
        firstName, lastName, email, role, dob, password
    } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        firstName, lastName, email, role, dob, password: passwordHash
    };
    const createdUser = await User.create(user)
    if(createdUser){
        return {success:true,Data:{user}};
    }
}

const loginUser = async (req) => {
    const { email, password } = req.body;

    if( !email || !password){
        return new ErrorGenerator(false, 400, 'Missing username or password');
    }
    const user = await User.findOne({email})
    if(!user){
        return new ErrorGenerator(false, 401, 'No user with this email');
    }
    console.log(user,password);
    const correctPass = await bcrypt.compare(password, user.password);
    if(!correctPass){
        return new ErrorGenerator(false, 401, 'Incoorect password');
    }
    const token = jwtOperations.createToken(user._id);
    return {success:true,data:{token}};
}

module.exports = {
    registerUser,
    loginUser
}