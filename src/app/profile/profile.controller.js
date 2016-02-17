(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(profileService, $log){
    var vm = this;

    vm.genders = {
      M: 'Male',
      F: 'Female'
    };

    profileService.getProfile().then(function(user) {
      vm.user = user;
    });

    vm.save = function() {
      $log.info("save");
      profileService.saveProfile(vm.user).then(function(response){
        if(response.data.success) {
          vm.message = "Saved!";
        }
      });
    }
  }
})();