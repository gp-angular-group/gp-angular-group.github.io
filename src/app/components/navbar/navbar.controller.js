(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('NavbarController', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.toggleLeft = buildToggler('left');
       $scope.menuSections = [
        {
          name: 'Home'       
        },
        {
          name: 'Friends'
        },
        {
          name: 'Sign Out'
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
    
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function () {
        $mdSidenav('left').close()
          .then(function () {
            $log.debug("close LEFT is done");
          });
      };
    })
})();