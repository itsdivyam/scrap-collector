const uuid = require('node-uuid'),
   md5 = require('md5'),
   crypto = require('crypto');

//Model for User
module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    gender: {
      type: 'string',
      isIn: ['Male','Female','Other'],
      required: true
    },
    email: {
      type: 'string',
      required : true
    },
    password: {
      type: 'string',
      columnName: 'password'
    },
    typeOfUser: {
      type: 'string',
      isIn: ['MC','Citizen'],
      required: true
    },
    specialKey: {
      type: 'text',
      columnName: 'specialKey'
    },
    city:{
      type: 'text',
      required : false
    }
  },
  createUser : createUser,
  getUser: getUser,
  updateUser: updateUser,
  getRegisteredUser : getRegisteredUser
};

async function createUser(data){
  let specialKey = generateSalt();
  let password = await generateEncryptedPassword(data.password, specialKey);
  data.password = password;
  data.specialKey = specialKey;

  let user = await User.findOne({
    email : data.email
  });

  if(user){
    return {
      success : false,
      data : 'User with same email already exists!!'
    }
  }
  let newUser = await User.create(data).fetch();

  return {
    success : true,
    data : newUser
  };
}

function generateSalt() {
  return md5(uuid.v1());
}

async function generateEncryptedPassword(password, salt) {
  return new Promise(function(resolve, reject) {
    crypto.pbkdf2(password, salt, 10, 512, 'sha512', function (err, encrypted) {
      if (err) {
        sails.log.error('User#generateEncryptedPassword :: ', err);
        return reject(err);
      }
      return resolve(encrypted.toString('hex'));
    });
  });
}

async function getUser(userId){
  let user = await User.findOne({
    id : userId
  });

  return user;
}

async function updateUser(updateData){
  let user = await User.findOne({id:  updateData.id});

  let updatedUser = await User.updateOne({
    id:  updateData.id
  }).set({
    name: (updateData.name)? updateData.name : user.name,
    gender: (updateData.email)? updateData.email : user.email
  });

  return updatedUser;
}

async function getRegisteredUser(data){
  let condition = {email:  data.email};
  let user = await User.findOne(condition);

  if(!user){
    return{
      success : false,
      data : 'User with given email id not present, Please register!!'
    }
  }

  let password = await generateEncryptedPassword(data.password, user.specialKey);

  if(password === user.password){
    return {
      success : true,
      data : user
    };
  }
  else{
    return {
      success : false,
      data : 'Entered password is wrong! Please enter right password'
    };
  }
}
