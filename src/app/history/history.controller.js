(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('HistoryController', HistoryController);

  /** @ngInject */
  function HistoryController(historyData){
    var vm = this;

    vm.userHistory = historyData;
  }
})();