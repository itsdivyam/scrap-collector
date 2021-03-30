module.exports.routes = {

  '/': { view: 'pages/homepage' },

  'GET /login' : {
    view: 'pages/login'
  },

  'GET /signup' : {
    view: 'pages/signup'
  },

  'POST /user/signUpUser' : {
    controller: 'UserController',
    action : 'signUpUser'
  },

  'GET /user/getUser' : {
    controller: 'UserController',
    action: 'getUser'
  },

  'PUT /user/updateUser' : {
    controller: 'UserController',
    action: 'updateUser'
  },

  'POST /scrap/createScrap' : {
    controller: 'ScrapController',
    action : 'createScrap'
  },

  'GET /scrap/getUserScrap' : {
    controller: 'ScrapController',
    action: 'getUserScrap'
  },

  'GET /scrap/getAllScrap' : {
    controller: 'ScrapController',
    action: 'getAllScrap'
  }
}
