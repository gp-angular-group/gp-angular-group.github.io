(function() {
  'use strict';

  angular
    .module('gpSocial')
    .service('profileService', profileService)
    .service('profileServiceMock', profileServiceMock)
    .config(function($provide){
      $provide.decorator('profileService', function($delegate, profileServiceMock) {
        $delegate = profileServiceMock;
        return $delegate;
      });
    });

  /** @ngInject */
  function profileService($http) {
    this.getProfile = function() {
      return $http.get('api/profile');
    };

    this.saveProfile = function(user) {
      return $http.post('api/profile', user);
    }
  }

  /** @ngInject */
  function profileServiceMock($http) {
    this.getProfile = function() {
      return $http.get('app/components/profile/mock/getProfile.mock.json');
    };

    this.saveProfile = function() {
      return $http.get('app/components/profile/mock/saveProfile.mock.json');
    };
  }
})();
