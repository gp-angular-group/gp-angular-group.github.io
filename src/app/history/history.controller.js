(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('HistoryController', HistoryController);

  /** @ngInject */
  function HistoryController(historyData){
    var vm = this;

    // Get from server array of objects and prepare for controller uses
    vm.userHistory = historyData.data;
  }
})();