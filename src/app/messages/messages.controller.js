(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('MessagesController', MessagesController)

  /** @ngInject */
  function MessagesController($log){
    //var vm = this;

    $log.info('сообщения');
  }

})();