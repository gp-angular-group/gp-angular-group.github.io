(function () {
  'use strict';

  angular
    .module('gpSocial')
    .run([ "$httpBackend","messagesDataService", backend]);

  // Mock a server side, return data.
  function backend($httpBackend, messagesDataService) {
    console.dir("messagesDataService: " + messagesDataService);

    $httpBackend.whenGET('app/messages/messages.html').respond(getUserMessages);

    function getUserMessages(method, url, data) {
//      var userMessages = messagesDataService.getAll(),
        var testUser = 'testUser',
            testDataFromService = messagesDataService.getAll();

      console.log("messagesDataService: " + messagesDataService);

      console.log("from back: " + testUser);
      console.log("from back service: " + testDataFromService);

      return [200, testUser, {}];
    }

    // Ignore all other requests
    $httpBackend.whenGET(/.*/).passThrough();
  }

}());
