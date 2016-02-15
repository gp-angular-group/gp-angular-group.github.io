(function() {
	'use strict';

	angular
		.module('gpSocial')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['requestService'];
		function LoginController(dataService) {
			var vm = this;
			vm.loginClick = loginClick;
			function loginClick(){
				console.log("get");
				dataService.data('GET');
			}
		}
})();
