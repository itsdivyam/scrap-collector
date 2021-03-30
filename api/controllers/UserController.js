const User = require('../models/User.js');
const formidable = require('formidable');

module.exports = {
  signUpUser : signUpUser,
  getUser : getUser,
  updateUser : updateUser
};

async function signUpUser(req, res){
  console.log("Coming here----");
  const form = new formidable.IncomingForm();
  form.multiples = false;
  form.parse(req);

  form.on('field', function(name, value){
    console.log("name---",name,"value----", value);
    // let newUser = await User.createUser(req.body);
    //
    // let response = {
    //   success : true,
    //   data : newUser
    // };
    //
    // res.send(response);
  });
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
