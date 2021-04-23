module.exports.routes = {

  '/': { view: 'pages/homepage' },

  'GET /login' : {
    view: 'pages/login'
  },

  'GET /signup' : {
    view: 'pages/signup'
  },

  'GET /feed' : {
    view : 'pages/postFeed'
  },

  'POST /user/signUpUser' : {
    controller: 'UserController',
    action : 'signUpUser'
  },

  'GET /user/login' : {
    controller: 'UserController',
    action : 'loginUser'
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
