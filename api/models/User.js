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
    }
  },
  createUser : createUser,
  getUser: getUser,
  updateUser: updateUser
};

async function createUser(data){
  let newUser = await User.create(data).fetch();

  return newUser;
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
