(function () {
  'use strict';

  angular
    .module('gpSocial')
    .run([ "$httpBackend","messagesService","historyDataService", backend]);

  // Mock a server side, return data.
  function backend($httpBackend, messagesService, historyDataService) {

    $httpBackend.whenGET('/fakeRemoteServer/userHistory').respond(getAllUserHistory);
    function getAllUserHistory() {
      var userHistory = historyDataService.getAll();
      return [200, userHistory, {}];
    }
    
    // Ignore all other requests
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
  }

}());
