(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('NavbarController', function ($scope, profileService, $timeout, $mdSidenav, $log) {
      $scope.toggleLeft = buildToggler('left');
       $scope.menuSections = [
        {
          name: 'My profile',
          state: {
            name: 'profile'
          }  
        },
        {
          name: 'My messages',
          state: {
            name: 'messages'
          }  
        },
        {
          name: 'My history',
          state: {
            name: 'history'
          }  
        },
        {
          name: 'Log Out',
          state: {
            name: 'login'
          }       
        }];       

        profileService.getProfile().then(function(user) {
          $scope.user = user;
        });
     
      function buildToggler(navID) {
        return function() {
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              $log.debug("toggle " + navID + " is done");
            });
        }
      }
    })

})();