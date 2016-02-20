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
          'viewToolbar': {templateUrl: 'app/components/navbar/navbar.login.html',
                           controller:  'NavbarController'
          },
          'viewMain': {templateUrl: 'app/login/login.html',
                        controller: 'LoginController',
                        controllerAs: 'login'
          }
        }
        /*templateUrl: 'app/login/login.html',*/
        
      })

      .state('history', {
        url: '/history',
        views: {
          'viewToolbar': {templateUrl: 'app/components/navbar/navbar.main.html',
                          controller:  'NavbarController'
          },
          'viewMain': {templateUrl: 'app/history/history.html',
                      controller: 'HistoryController',
                      controllerAs: 'history'
          }
        }
        /*templateUrl: 'app/history/history.html',*/
        
      })

      .state('messages', {
        url: '/messages',
        views: {
          'viewToolbar': {templateUrl: 'app/components/navbar/navbar.main.html',
                          controller:  'NavbarController'
          },
          'viewMain': {templateUrl: 'app/messages/messages.html',
                      controller: 'MessagesController',
                      controllerAs: 'messages'
          }
        }
        /*templateUrl: 'app/messages/messages.html',*/
        
      })

      .state('profile', {
        url: '/profile',
        views: {
          'viewToolbar': {templateUrl: 'app/components/navbar/navbar.main.html',
                          controller:  'NavbarController'
          },
          'viewMain': {templateUrl: 'app/profile/profile.html',
                      controller: 'ProfileController',
                      controllerAs: 'profile'
          }
        }
        /*templateUrl: 'app/profile/profile.html',*/
        
      });

    $urlRouterProvider.otherwise('/');
  }

})();
