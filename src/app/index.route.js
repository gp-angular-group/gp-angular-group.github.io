(function() {
  'use strict';

  angular
    .module('gpSocial')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        views: {
          'navbar': {
            templateUrl:  'app/components/navbar/navbar.main.html',
            controller:   'NavbarController',
            controllerAs: 'navbar'
          }
        }
      })
      .state('app.login', {
        url: '/',
        views: {
          'navbar@': {
            templateUrl:  'app/components/navbar/navbar.login.html'
          },
          'content@': {
            templateUrl:  'app/login/login.html',
            controller:   'LoginController',
            controllerAs: 'login'
          }
        }
      })
      .state('app.history', {
        url: '/history',
        views: {
          'content@': {
            templateUrl:  'app/history/history.html',
            controller:   'HistoryController',
            controllerAs: 'history'
          }
        },
        resolve: {
          historyData: function(historyDataService) {
            return  historyDataService.getUHistory();
          }
        }
      })
      .state('app.messages', {
        url: '/messages',
        views: {
          'content@': {
            templateUrl:  'app/messages/messages.html',
            controller:   'MessagesController',
            controllerAs: 'messages'
          }
        },
        resolve: {
          messagesData: function(messagesService) {
            return  messagesService.getMessages();
          }
        }
      })
      .state('app.profile', {
        url: '/profile',
        views: {
          'content@': {
            templateUrl:  'app/profile/profile.html',
            controller:   'ProfileController',
            controllerAs: 'profile'
          }
        },
        resolve: {
          profileData: function(profileService) {
            return  profileService.getProfile();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
