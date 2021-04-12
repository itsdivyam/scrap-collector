/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

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
}
