(function() {
	'use strict';

	angular
		.module('gpSocial')
		.controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(requestService, $log){
			var vm = this;

			vm.loginClick = loginClick;
			function loginClick(){
				$log.info("get");
        requestService.data('GET');
			}
		}
})();
