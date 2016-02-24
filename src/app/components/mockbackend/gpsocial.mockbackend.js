(function () {
  'use strict';

  angular
    .module('gpSocial')
    .run([ "$httpBackend","messagesDataService","historyDataService", backend]);

  // Mock a server side, return data.
  function backend($httpBackend, messagesService, historyDataService) {

/*    $httpBackend.whenGET('/fakeRemoteServer/userMassages').respond(getAllUserMessages);
    function getAllUserMessages() {
      var userMessages = messagesService.getAll();
      return [200, userMessages, {}];
    }*/

    $httpBackend.whenGET('/fakeRemoteServer/userHistory').respond(getAllUserHistory);
    function getAllUserHistory() {
      var userHistory = historyDataService.getAll();
      return [200, userHistory, {}];
    }
    
    // Ignore all other requests
    $httpBackend.whenGET(/.*/).passThrough();
  }

}());
