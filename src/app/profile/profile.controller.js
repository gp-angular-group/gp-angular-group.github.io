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
      vm.message = true; //временно
      profileService.saveProfile(vm.user).then(function(){
        /*vm.message = true;*/
      });
    }
  }
})();