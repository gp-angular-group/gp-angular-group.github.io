(function() {
  'use strict';

  angular
    .module('gpSocial')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })

      .state('history', {
        url: '/history',
        templateUrl: 'app/history/history.html',
        controller: 'HistoryController',
        controllerAs: 'history'
      })

      .state('messages', {
        url: '/messages',
        templateUrl: 'app/messages/messages.html',
        controller: 'MessagesController',
        controllerAs: 'messages'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
