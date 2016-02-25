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
        views: {
          'viewToolbar': {
            templateUrl:  'app/components/navbar/navbar.login.html',
            controller:   'NavbarController',
            controllerAs: 'navbar'
          },
          'viewMain': {
            templateUrl:  'app/login/login.html',
            controller:   'LoginController',
            controllerAs: 'login'
          }
        }

      })

      .state('history', {
        url: '/history',
        views: {
          'viewToolbar': {
            templateUrl:  'app/components/navbar/navbar.main.html',
            controller:   'NavbarController',
            controllerAs: 'navbar'
          },
          'viewMain': {
            templateUrl:  'app/history/history.html',
            controller:   'HistoryController',
            controllerAs: 'history'
          }
        },
        resolve: {
          historyData: function(historyService) {
            return  historyService.getHistory();
          }
        }
      })

      .state('messages', {
        url: '/messages',
        views: {
          'viewToolbar': {
            templateUrl:  'app/components/navbar/navbar.main.html',
            controller:   'NavbarController',
            controllerAs: 'navbar'
          },
          'viewMain': {
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

      .state('profile', {
        url: '/profile',
        views: {
          'viewToolbar': {
            templateUrl:  'app/components/navbar/navbar.main.html',
            controller:   'NavbarController',
            controllerAs: 'navbar'
          },
          'viewMain': {
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
