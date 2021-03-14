const User = require('../models/User.js');

module.exports = {
  signUpUser : signUpUser
};

function signUpUser(req, res){
    console.log("This is from request----",req.body);
    User.createUser(req.body);
    res.send(req.body);
}
