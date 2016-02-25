(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController(messagesData, $log){
    var vm = this;

    // Get from server array of objects and prepare for controller uses
    // userMessages = [{title:'description},{title:'description'}..]
    vm.userMessages = messagesData.data;

    $log.info('сообщения');
  }

})();