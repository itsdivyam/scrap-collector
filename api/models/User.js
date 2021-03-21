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
  createUser : createUser
};

async function createUser(data){
  console.log("Coming in create user function-------",data);
  let newUser = await User.create(data);
  console.log("newUser--------",newUser);
  return;
}


//create a function to get User
// User.find({id:req.body.id})
