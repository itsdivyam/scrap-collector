//Model for User
module.exports = {
  attributes: {
    id: {
      type: 'number',
      unique: true,
      columnName: 'id',
      autoIncrement: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    gender: {
      type: 'string',
      isIn: ['male','female','other'],
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
};
