(function () {
  'use strict';
  // The data file for serverless.

  angular
    .module('gpSocial')
    .service('messagesDataService', messagesDataService);

  //@ngInject
  function messagesDataService($http) {
    this.userMassages = [
      {
        title: 'Message title 1. Theodore Roosevelt',
        description: 'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.'},
      {
        title: 'Message title 2. Winston Churchill',
        description: 'It\'s not good enough that we do our best; sometimes we have to do what\'s required.'
      },
      {
        title: 'Message title 3. Abraham Lincoln',
        description: 'Character is like a tree and a reputation like a shadow. The shadow is what we think of it; the tree is the real thing.'
      },
      {
        title: 'Message title 4. Funny SMS',
        description: 'Two goldfish are in a tank. One says to the other, “Do you know how to drive this thing?"'
      },
      {
        title: 'Message title 5. Text message',
        description: 'Say good about yourself and you\’ll be called arrogant; say bad about yourself and you\’ll be believed.'
      }
    ];

    // method for backend mock server
    this.getAll = function () {
      return this.userMassages;
    };

    this.getUMsgs = getUserMessages;

    // Get the message from the remote server
    function getUserMessages() {
      return $http.get('/fakeRemoteServer/userMassages')
            .then(getUserMessagesComplete)
            .catch(getUserMessagesFailed);

      function getUserMessagesComplete(response) {
          return response.data;
      }

      function getUserMessagesFailed(error) {
          logger.error('XHR Failed for getUserMessages.' + error.data);
      }
    }

  }
}());
