const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const ErrorGenerator = require('../util/errorGenerator')


router.post('/login', async (req, res)=> {
    const result = await userController.loginUser(req);
    if(!result){
      return new ErrorGenerator(false, 404, 'No user found with given credentials');
    }
    res.json(result);
});

router.post('/register', async(req, res)=> {
    const result = await userController.registerUser(req);
    if(!result){
      return new ErrorGenerator(false, 400, 'Could not create user, please try again');
    }
    res.json(result);
})

module.exports = router;
