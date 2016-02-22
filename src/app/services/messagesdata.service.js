(function () {
  'use strict';
  // The data file for serverless.

  angular
    .module('gpSocial')
    .service('messagesDataService', messagesDataService);

  //@ngInject
  function messagesDataService($http, $log) {
    this.userMassages = [
      {
        title: 'Message title 1',
        description: 'Send a text message to your friends and family in Philippines. Enter your Philippines mobile number and sms text message and click send.'
      },
      {
        title: 'Message title 2',
        description: 'That\'s right, we won\'t send you unwanted text messages or share your phone number with anybody.'
      }
    ];

    this.getAll = function () {
      return this.userMassages;
    };

    this.testData = 'testmessagesService';

/*    return {
        getUserMessages: getUserMessages
    };*/

    this.getUMsgs = getUserMessages;

    function getUserMessages() {
      return $http.get('/fakeRemoteserver/userMassages')
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
