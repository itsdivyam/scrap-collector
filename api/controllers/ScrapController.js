const Scrap = require('../models/Scrap.js');

module.exports = {
  createScrap : createScrap,
  getUserScrap : getUserScrap,
  getAllScrap : getAllScrap
}

async function createScrap(req,res){
  let newScrap = await Scrap.createScrap(req.body);

  let response = {
    success : true,
    data : newScrap
  };

  res.send(response);
}

async function getUserScrap(req, res){
  let userScrap = await Scrap.getUserScrap(req.query);

  let response = {
    success : true,
    data : userScrap
  };

  res.send(response);
}

async function getAllScrap(req, res){
  let allScrap = await Scrap.getAllScrap(req.query);

  let response = {
    success : true,
    data : allScrap
  };

  res.send(response);
}
