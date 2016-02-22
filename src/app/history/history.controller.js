(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('HistoryController', HistoryController);

  /** @ngInject */
  function HistoryController(historyDataService){
    var vm = this;

    // Get from server array of objects and prepare for controller uses
    historyDataService.getUHistory().then(toPrepareForCtrl);
    function toPrepareForCtrl(UHistory) {  
      vm.userHistory = UHistory;
    }

    // vm.myhistory = [
    //   {
    //   image: 'http://38.media.tumblr.com/avatar_8cc900efa7d0_128.png',
    //   title:'Мой заголовок 1',
    //   description: 'Моё описание 1',
    //   price: 150
    //   },
    //   {
    //   image: 'http://38.media.tumblr.com/avatar_8cc900efa7d0_128.png',
    //   title:'Мой заголовок 2',
    //   description: 'Моё описание 2',
    //   price: 300  
    //   }
    // ]


  }
})();