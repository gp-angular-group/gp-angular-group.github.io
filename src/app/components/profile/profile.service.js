(function() {
  'use strict';

  angular
    .module('gpSocial')
    .factory('profileService', profileService);

  /** @ngInject */
  function profileService($http) {

    var service = {
      getProfile: getProfile,
      saveProfile: saveProfile
    };

    return service;

    function getProfile() {
      return $http.get('api/profile');
    }

    function saveProfile() {
      return $http.post('api/profile');
    }
  }
})();
