(function() {
  'use strict';

  angular
    .module('gpSocial')
    .directive('socialNavbar', socialNavbar);

  /** @ngInject */
  function socialNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;
  }

})();
