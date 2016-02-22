(function() {
  'use strict';

  angular
    .module('gpSocial')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(profileService, $log, profileData){
    var vm = this;

    vm.genders = {
      M: 'Male',
      F: 'Female'
    };

    vm.user = profileData;

    vm.submitForm = function() {
      // check to make sure the form is completely valid
      if (vm.userForm.$valid) {
        alert('our form is amazing');
      }

    };

    vm.save = function() {
      $log.info("save");
      vm.message = true; //временно
      profileService.saveProfile(vm.user).then(function(){
        /*vm.message = true;*/
      });
    }
  }
})();