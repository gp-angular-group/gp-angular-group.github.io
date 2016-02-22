(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController(messagesDataService, $log){
    var vm = this;

    // Get from server array of objects and prepare for controller uses
    // UMsgs = [{title:'description},{title:'description'}..]
    messagesDataService.getUMsgs().then(toPrepareForCtrl);
    function toPrepareForCtrl(UMsgs) {  
      vm.userMasseges = UMsgs;
    }

    $log.info('сообщения');
  }

})();