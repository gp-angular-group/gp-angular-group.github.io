(function () {
  'use strict';
  // The data file for serverless.

  angular
    .module('gpSocial')
    .service('historyService', historyService)
    .service('historyServiceMock', historyServiceMock)
    .config(function($provide){
      $provide.decorator('historyService', function($delegate, historyServiceMock) {
        $delegate = historyServiceMock;
        return $delegate;
      });
    });

  /** @ngInject */
  function historyService($http) {
    this.getHistory = function() {
      return $http.get('api/login');
    };
  }

  /** @ngInject */
  function historyServiceMock($http) {
    this.getHistory = function() {
        return $http.get('app/components/history/mock/getHistory.mock.json');  
    };
  }
}());