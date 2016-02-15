(function() {
  'use strict';

  angular
    .module('gpSocial')
    .service('authorisationService', authorisationService)
    .service('authorisationServiceMock', authorisationServiceMock)
    .config(function($provide){
      $provide.decorator('authorisationService', function($delegate, authorisationServiceMock) {
        $delegate = authorisationServiceMock;
        return $delegate;
      });
    });

  /** @ngInject */
  function authorisationService($http) {
    this.login = function() {
      return $http.get('api/login');
    };

    this.logout = function() {
      return $http.get('api/logout');
    };
  }

  /** @ngInject */
  function authorisationServiceMock($http) {
    this.login = function() {
      return $http.get('app/components/authorisation/mock/login.mock.json');
    };

    this.logout = function() {
      return $http.get('app/components/authorisation/mock/logout.mock.json');
    };
  }
})();
