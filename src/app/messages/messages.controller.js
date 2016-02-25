(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController(messagesData, $log){
    var vm = this;

<<<<<<< HEAD
    // Get from server array of objects and prepare for controller uses
    // userMessages = [{title:'description},{title:'description'}..]
=======
    console.dir(messagesData);
>>>>>>> 5a674d30202ff6f95a8a0d624196536059f7e6c3
    vm.userMessages = messagesData.data;

    $log.info('сообщения');
  }

})();