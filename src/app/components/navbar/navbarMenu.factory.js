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
        state: 'app.profile'
      },
      {
        title: 'My messages',
        state: 'app.messages'
      },
      {
        title: 'My history',
        state: 'app.history'
      },
      {
        title: 'Log Out',
        state: 'app.login'
      }];
  }
})();