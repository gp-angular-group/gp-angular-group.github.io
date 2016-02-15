(function() {
	'use strict';

	angular
		.module('gpSocial')
		.controller('ProfileController', ProfileController);
	
	/** @ngInject */
  function ProfileController(profileService, $log){
		var vm = this;

		vm.genders = [ 'Male', 'Female' ];

    profileService.getProfile().then(function(response) {
      vm.user = response.data;
    });

		vm.saveClick = function() {
			$log.info("save");
      profileService.saveProfile(vm.user).then(function(response){
        if(response.data.success) {
          vm.message = "Saved!";
        }
      });
		}
	}
})();
