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
    },
    user: {
      model: 'user'
    }
  },
  createScrap : createScrap,
  getUserScrap : getUserScrap,
  getAllScrap : getAllScrap
}

async function createScrap(data){
  let jsonLocation = JSON.parse(data.location);
  data.location = jsonLocation;
  let newScrap = await Scrap.create(data).fetch();

  return newScrap;
}

async function getUserScrap(data){
  let scrap = await Scrap.findOne({
    id : data.id,
    user : data.userId
  });

  return scrap;
}

async function getAllScrap(data){
  let scrap = await Scrap.find();

  return scrap;
}
