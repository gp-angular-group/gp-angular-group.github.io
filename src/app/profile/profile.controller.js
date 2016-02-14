(function() {
	'use strict';

	angular
		.module('gpSocial')
		.controller('ProfileController', ProfileController);

	/** @ngInject */
	function ProfileController($timeout, webDevTec, toastr) {
		var vm = this;

		vm.user = "Ivan";

	}
})();
