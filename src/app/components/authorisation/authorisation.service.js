(function() {
  'use strict';

  angular
    .module('gpSocial')

    .factory('authInterceptor', authInterceptor)
    .service('user', userService)
    .service('auth', authService)
    .constant('API', 'http://test-routes.herokuapp.com')
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    })

    /*.service('authorisationService', authorisationService)
    .service('authorisationServiceMock', authorisationServiceMock)
    .config(function($provide){
      $provide.decorator('authorisationService', function($delegate, authorisationServiceMock) {
        $delegate = authorisationServiceMock;
        return $delegate;
      });
    });*/

function authInterceptor(API, auth) {
  return {   
    request: function(config) {
      var token = auth.getToken();
      if(config.url.indexOf(API) === 0 && token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
   
    response: function(res) {
      if(res.config.url.indexOf(API) === 0 && res.data.token) {
        auth.saveToken(res.data.token);
      }

      return res;
    }
  }
}

 /** @ngInject */
 
function userService($http, API, auth) {
  var self = this;
 
  /*self.register = function(username, password) {
  return $http.post(API + '/auth/register', {
      username: username,
      password: password
    })
  }*/

  self.login = function(username, password) {
  return $http.post(API + '/auth/login', {
      username: username,
      password: password
    })   
  };
}

/** @ngInject */
function authService($window) {
  var self = this;

  self.parseJwt = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }
  self.saveToken = function(token) {
    $window.localStorage['jwtToken'] = token;
  }

  self.getToken = function() {
    return $window.localStorage['jwtToken'];
  }

  self.isAuthed = function() {
    var token = self.getToken();
      if(token) {
        var params = self.parseJwt(token);
        return Math.round(new Date().getTime() / 1000) <= params.exp;
      } else {
        return false;
      }
  }

  self.logout = function() {
    $window.localStorage.removeItem('jwtToken');
  }
}

  /** @ngInject */
 /* function authorisationService($http) {
    this.login = function() {
      return $http.get('api/login');
    };

    this.logout = function() {
      return $http.get('api/logout');
    };
  }
*/
  /** @ngInject */
  /*function authorisationServiceMock($http) {
    this.login = function() {
        return $http.get('app/components/authorisation/mock/login.mock.json');  
    };

    this.logout = function() {
      return $http.get('app/components/authorisation/mock/logout.mock.json');
    };
  }*/
})();
