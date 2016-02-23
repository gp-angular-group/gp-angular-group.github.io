(function () {
  'use strict';
  // The data file for serverless.

  angular
    .module('gpSocial')
    .service('historyDataService', historyDataService);

  //@ngInject
  function historyDataService($http, $log) {
    this.userHistory = [
      {
        image: 'http://38.media.tumblr.com/avatar_8cc900efa7d0_128.png',
        title:'Мой заголовок 1',
        description: 'Моё описание 1',
        price: 150
      },
      {
        image: 'http://38.media.tumblr.com/avatar_8cc900efa7d0_128.png',
        title:'Мой заголовок 2',
        description: 'Моё описание 2',
        price: 300  
      }
    ];

    // method for backend mock server
    this.getAll = function () {
      return this.userHistory;
    };

    this.getUHistory = getUserHistory;

    // Get the message from the remote server
    function getUserHistory() {
      return $http.get('/fakeRemoteServer/userHistory')
            .then(getUserHistoryComplete)
            .catch(getUserHistoryFailed);

      function getUserHistoryComplete(response) {
          return response.data;
      }

      function getUserHistoryFailed(error) {
          $log.error('XHR Failed for getUserHistory.' + error.data);
      }
    }

  }
}());
