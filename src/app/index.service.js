(function() {
	'use strict';

	angular
		.module('gpSocial')
		.factory('requestService', requestService)


		requestService.$inject = ['$http', '$log'];
		function requestService($http, $log){
			var vm = this;
      $log.info("пришёл")
			return {
				data: function(myMethod){
					$log.info("пришёл");
					if (myMethod == 'GET'){
            $log.info('Гет метод');
						$http({
							method: "GET", 
							url: "/api.com/list"
						})
						.success( function(dataSend){
								vm.user = dataSend;
                $log.info(vm.user)
						});
						vm.users = {name:'Alex', age: 19};
					}
					if (myMethod == 'POST'){
            $log.info('пост метод');
						$http({
							method: "POST", 
							url: "/api.com/list",
							data: vm.user
						});
					}
				}
			};
		}
})();