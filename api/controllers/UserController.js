const User = require('../models/User.js');

module.exports = {
  signUpUser : signUpUser,
  getUser : getUser,
  updateUser : updateUser,
  loginUser : loginUser
};

async function signUpUser(req, res){

  let user = {
    name: req.param('name'),
    email: req.param('email'),
    gender: req.param('gender'),
    typeOfUser: req.param('typeOfUser'),
    password: req.param('password')
  };

  let newUser = await User.createUser(req.body);

  let response = {
    success : newUser.success,
    data : newUser.data
  };

  if(response.success == false){
    return res.view('pages/signUp',{response : response})
  }
  res.redirect('/login');
}

async function loginUser(req, res){
  let data = {
    email: req.param('email'),
    password: req.param('password')
  };

  let user = await User.getRegisteredUser(data);

  let response = {
    success : user.success,
    data : user.data
  };

  if(response.success == false){
    return res.view('pages/signUp',{response : response})
  }
  res.send(response);
}

async function getUser(req, res){
  let user = await User.getUser(req.query.id);

  let response = {
    success : true,
    data : user
  };

  res.send(response);
}

async function updateUser(req, res){
  let updatedUser = await User.updateUser(req.body);

  let response = {
    success : true,
    data : user
  };

  res.send(response);
}
