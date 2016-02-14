(function() {
	'use strict';

	angular
		.module('gpSocial')
		.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
//			.state('home', {
//				url: '/',
//				templateUrl: 'app/main/main.html',
//				controller: 'MainController',
//				controllerAs: 'main'
//			})
			.state('login', {
				url: '/',
				templateUrl: 'app/login/login.html',
				controller: 'LoginController',
				controllerAs: 'login'
			})

			.state('profile', {
				url: '/profile',
				templateUrl: 'app/profile/profile.html',
				controller: 'ProfileController',
				controllerAs: 'profile'
			});

		$urlRouterProvider.otherwise('/');
	}

})();
