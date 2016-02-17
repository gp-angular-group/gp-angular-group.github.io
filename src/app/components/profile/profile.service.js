(function() {
  'use strict';

  angular
    .module('gpSocial')
    .service('profileService', profileService)

  /** @ngInject */
  function profileService($http) {
    this.getProfile = function() {
      return $http.get('https://fathomless-everglades-3680.herokuapp.com/api/user/1')
        .then(function(response) {
          return response.data;
        });
    };

    this.saveProfile = function(user) {
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/1', user);
    }
  }
})();
