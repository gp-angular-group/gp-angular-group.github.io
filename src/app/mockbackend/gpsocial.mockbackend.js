(function () {
  'use strict';

  angular
    .module('gpSocial')
    .run([ "$httpBackend","messagesDataService","historyDataService", backend]);

  // Mock a server side, return data.
  function backend($httpBackend, messagesDataService, historyDataService) {

    // $httpBackend.whenGET('app/messages/messages.html').respond(getAllUserMessages);
    // function getAllUserMessages(method, url, data) {
    //   var userMessages = messagesDataService.getAll();
    //   console.log("from data service: " + userMessages[0].title);
    //   return [200, userMessages, {}];
    // }

    $httpBackend.whenGET('/fakeRemoteServer/userMassages').respond(getAllUserMessages);
    function getAllUserMessages() {
      var userMessages = messagesDataService.getAll();
      return [200, userMessages, {}];
    }

    $httpBackend.whenGET('/fakeRemoteServer/userHistory').respond(getAllUserHistory);
    function getAllUserHistory() {
      var userHistory = historyDataService.getAll();
      return [200, userHistory, {}];
    }
    // Ignore all other requests
    $httpBackend.whenGET(/.*/).passThrough();
  }

}());