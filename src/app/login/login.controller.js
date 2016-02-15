(function() {
	'use strict';

	angular
		.module('gpSocial')
		.controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(authorisationService, $log, $state){
			var vm = this;

			vm.loginClick = function() {
				$log.info("get");
        authorisationService.login().then(function(){
           $state.go('profile');
        });
			}
		}
})();
