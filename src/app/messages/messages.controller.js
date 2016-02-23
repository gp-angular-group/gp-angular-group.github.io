(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController(messagesData, $log){
    var vm = this;

    // Get from server array of objects and prepare for controller uses
    // UMsgs = [{title:'description},{title:'description'}..]
    vm.userMasseges = messagesData;


    vm.mshow = false;
    vm.toggleDefenition = tglDefenition;
    function tglDefenition(index) {
      $log.info('Click!' + index);
      vm.mshow = vm.mshow === false ? true: false;
    }

    $log.info('сообщения');
  }

})();