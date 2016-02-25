(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('HistoryController', HistoryController);

  /** @ngInject */
  function HistoryController(historyData){
    var vm = this;

<<<<<<< HEAD
    // Get from server array of objects and prepare for controller uses
    vm.userHistory = historyData.data;
=======
    vm.userHistory = historyData;
>>>>>>> 5a674d30202ff6f95a8a0d624196536059f7e6c3
  }
})();