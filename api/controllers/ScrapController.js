const Scrap = require('../models/Scrap.js');

module.exports = {
  createScrap : createScrap

}

async function createScrap(req,res){
  let newScrap = await Scrap.createScrap(req.body);

  let response = {
    success : true,
    data : newScrap
  };

  res.send(response);

}
