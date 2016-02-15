(function() {
	'use strict';

	angular
		.module('gpSocial')
		.controller('ProfileController', ProfileController);
	
	/** @ngInject */
  function ProfileController(requestService, $log){
		var vm = this;

		vm.user = { name: 'Ivan', age: 15, gender: 'Male' };
		vm.genders = [ 'Male', 'Female' ];

		vm.saveClick = saveClick;
		function saveClick() {
			$log.info("save");
      requestService.data('POST');
		}
	}
})();
