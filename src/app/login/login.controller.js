(function() {
  'use strict';

  angular
    .module('gpSocial')   
    .controller('LoginController', LoginController);


    /** @ngInject */
    function LoginController($log, $state, user, auth){
      var vm = this;

      /*vm.enter = function() {
        $log.info("get");
        authorisationService.login().then(function(){
           $state.go('app.profile');
        });
      }*/

      function handleRequest(res) {
        var token = res.data ? res.data.token : null;
        if(token) { $state.go('app.profile'); console.log('JWT:', token); }
        vm.message = res.data.message;
        
      }

      vm.login = function() {
        user.login(vm.username, vm.password)
          .then(handleRequest, handleRequest)
      }
      vm.register = function() {
        user.register(vm.username, vm.password)
          .then(handleRequest, handleRequest)
      }      
      vm.logout = function() {
        auth.logout && auth.logout()
      }
      vm.isAuthed = function() {
        return auth.isAuthed ? auth.isAuthed() : false
      }

    }
})();
