(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('NavbarController', function ($scope, profileService, $timeout, $mdSidenav, $log, navbarMenu) {
      var vm = this;

      vm.toggleLeft = buildToggler('left');
      vm.menuSections = navbarMenu;

      profileService.getProfile().then(function(user) {
        vm.user = user;
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