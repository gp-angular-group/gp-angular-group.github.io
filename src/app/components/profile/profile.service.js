(function() {
  'use strict';

  angular
    .module('gpSocial')
    .service('profileService', profileService)
/*    .service('profileServiceMock', profileServiceMock)
    .config(function($provide){
      $provide.decorator('profileService', function($delegate, profileServiceMock) {
        $delegate = profileServiceMock;
        return $delegate;
      });
    });*/

  /** @ngInject */
  function profileService($http) {
    this.getProfile = function() {
      return $http.get('https://fathomless-everglades-3680.herokuapp.com/api/user/1');
    };

    this.saveProfile = function(user) {
      var userSend = {
        avatar: user.avatar,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age
      }
      if (user.gender == 'Female'){
        userSend.gender =  'F';
      } else{
        userSend.gender =  'M';
      }
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/1', userSend);
    }
  }

  /** @ngInject */
  /*function profileServiceMock($http) {
    this.getProfile = function() {
      return $http.get('app/components/profile/mock/getProfile.mock.json');
    };

    this.saveProfile = function() {
      return $http.get('app/components/profile/mock/saveProfile.mock.json');
    };
  }*/
})();
