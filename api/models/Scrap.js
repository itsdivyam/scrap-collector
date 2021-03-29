//Model for Scrap
module.exports = {
  attributes: {
    image : {
      type : 'string',
      required : true
    },
    location: {
      type: 'json',
      required: true
    },
    typeOfScrap: {
      type: 'string',
      isIn: ['DEGRADABLE','NONDEGRADABLE'],
      required: true
    },
    status: {
      type: 'string',
      isIn: ['REPORTED','VIEWED','VERIFIED','COLLECTED','REVERIFIED'],
      required: true
    },
    details: {
      type: 'string'
    }
  },
  createScrap : createScrap,
}

async function createScrap(data){
  let newScrap = await Scrap.create(data).fetch();

  return newScrap;
}
