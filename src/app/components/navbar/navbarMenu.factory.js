(function() {
  'use strict';

  angular
    .module('gpSocial')
    .factory('navbarMenu', navbarMenu);

  /** @ngInject */
  function navbarMenu() {
    return [
      {
        title: 'My profile',
        state: 'profile'
      },
      {
        title: 'My messages',
        state: 'messages'
      },
      {
        title: 'My history',
        state: 'history'
      },
      {
        title: 'Log Out',
        state: 'login'
      }];
  }
})();