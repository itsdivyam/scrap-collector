//Model for User
module.exports = {
  attributes: {
    image : {
      type : 'string',
      required : true
    },
    location: {
      type: 'json',
      columnType: 'array',
      required: true
      // index: '2d',
      // longitude: {
      //     type: 'float',
      //     required: true,
      // },
      // latitude: {
      //     type: 'float'
      // }
    }
  }
}
