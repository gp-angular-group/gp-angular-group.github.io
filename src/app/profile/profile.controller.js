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
      vm.user = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        age: response.data.age,
        //gender: response.data.gender,
        avatar: response.data.avatar
      }
      if (response.data.gender == "M"){
        vm.user.gender = 'Male';
      }else{
        vm.user.gender = 'Female';
      }
   
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
