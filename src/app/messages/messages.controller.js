(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController(messagesData, $log){
    var vm = this;

    console.dir(messagesData);
    vm.userMessages = messagesData.data;

    $log.info('сообщения');
  }

})();