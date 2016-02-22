(function () {
  'use strict';

  angular
    .module('gpSocial')
    .run([ "$httpBackend","messagesDataService", backend]);

  // Mock a server side, return data.
  function backend($httpBackend, messagesDataService) {

    // $httpBackend.whenGET('app/messages/messages.html').respond(getAllUserMessages);
    // function getAllUserMessages(method, url, data) {
    //   var userMessages = messagesDataService.getAll();
    //   console.log("from data service: " + userMessages[0].title);
    //   return [200, userMessages, {}];
    // }

  $httpBackend.whenGET('/fakeRemoteserver/userMassages').respond(getAllUserMessages);
    function getAllUserMessages(method, url, data) {
      var userMessages = messagesDataService.getAll();
      console.log("from data service: " + userMessages[0].title);
      return [200, userMessages, {}];
    }
    
    // Ignore all other requests
    $httpBackend.whenGET(/.*/).passThrough();
  }

}());
