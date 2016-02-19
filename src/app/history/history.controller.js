(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('HistoryController', HistoryController);

  /** @ngInject */
  function HistoryController($log){
    var vm = this;

    vm.myhistory = {
    	image: 'http://38.media.tumblr.com/avatar_8cc900efa7d0_128.png',
    	title:'Мой заголовок',
    	description: 'Моё описание исторического события',
    	price: 150
    }

    vm.sort = function(){
    	$log.info('Сортировка');
    }

  }
})();