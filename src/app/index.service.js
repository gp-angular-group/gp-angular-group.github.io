(function() {
	'use strict';

	angular
		.module('gpSocial')
		.factory('requestService', requestService)


		requestService.$inject = ['$http']; 
		function requestService($http){
			var vm = this;
			console.log("пришёл")
			return {
				data: function(myMethod){
					console.log("пришёл");
					if (myMethod == 'GET'){
						console.log('Гет метод');
						$http({
							method: "GET", 
							url: "/api.com/list"
						})
						.success( function(dataSend){
								vm.user = dataSend;
								console.log(vm.user)
						});
						vm.users = {name:'Alex', age: 19};
					}
					if (myMethod == 'POST'){
						console.log('пост метод');
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