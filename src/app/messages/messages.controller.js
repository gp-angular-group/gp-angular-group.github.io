(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController(messagesDataService, $log){
    var vm = this;

    // get from server array of objects 
    messagesDataService.getUMsgs().then(function(UMsgs) {
      console.log('From mes ctrl: ' + UMsgs[0].title);
      vm.userMasseges = UMsgs;
    });

    $log.info('сообщения');
  }

})();