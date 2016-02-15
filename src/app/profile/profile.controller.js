(function() {
	'use strict';

	angular
		.module('gpSocial')
		.controller('ProfileController', ProfileController);
	
	/** @ngInject */
	ProfileController.$inject = ['requestService'];
	function ProfileController(dataService){ //$timeout, webDevTec, toastr, dataService) {
		var vm = this;
		//vm.genders
		//vm.user = 
		
		vm.genders = ('Male Female').split(' ').map(function(state){
			return {gen: state};
		});

		//vm.users = "Ivan";
		vm.saveClick = saveClick;
		function saveClick(){
			console.log("save");
			dataService.data('POST');	
		}
	}
})();
