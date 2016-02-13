(function() {
  'use strict';

  angular
    .module('gpSocial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
