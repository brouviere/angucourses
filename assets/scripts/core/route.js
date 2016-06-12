mainApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'ContactController'
		})
		.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/course/:id', {
			templateUrl: 'partials/course-detail.html',
			controller: 'CoursesController'
		})
		.otherwise({
			redirectTo: '/home'
		})

	$locationProvider.html5Mode(true);
})