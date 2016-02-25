(function () {
  'use strict';

  angular
    .module('gpSocial')
    .service('messagesService', messagesService)
    .service('messagesServiceMock', messagesServiceMock)
    .config(function($provide){
      $provide.decorator('messagesService', function($delegate, messagesServiceMock) {
        $delegate = messagesServiceMock;
        return $delegate;
      });
    });

  /** @ngInject */
  function messagesService($http) {
    this.getMessages = function() {
      return $http.get('api/login');
    };
  }

  /** @ngInject */
  function messagesServiceMock($http) {
    this.getMessages = function() {
        return $http.get('app/components/messages/mock/getMessages.mock.json');  
    };
  }
}());
