(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('NavbarController', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.toggleLeft = buildToggler('left');
       $scope.menuSections = [
        {
          name: 'My profile',
          state: {
            name: 'profile'
          }  
        },
        {
          name: 'Log Out',
          state: {
            name: 'login'
          }       
        }];       
     
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