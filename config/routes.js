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

<<<<<<< HEAD
  'POST /user/signUpUser' : {
=======
  'GET /abc' : {
>>>>>>> 3c5f66f820723da3365ebc7a053b092809f7ad1b
    controller: 'UserController',
    action : 'signUpUser'
  }

};
