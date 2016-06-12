mainApp.controller('HomeController',['$scope', '$routeParams' , 'courses', function($scope,$routeParams,$courses){
	console.log($courses.getCourses());
	$scope.courses = $courses.getCourses();


	// // Définition de l'état du cours
	for (var i = 0; i < $scope.courses.length; i++) {
		if ($scope.courses[i].finished ) {
			$scope.courses[i].started = false;
		}
		// else if ($scope.courses[i].started) {
		// 	$scope.courseStatement = ['panel-warning', 'started'];
		// 	console.log($scope.courseStatement);
		// }
	}
	// }
	// Définition de l'état du cours
	// if(course.started && course.finished){
	// 	$scope.courseStatement = 'finished';
	// 	$scope.courseStatementClass = 'panel-success';
	// }
	// else if (courseFound.started) {
	// 	$scope.courseStatement = 'started';
	// 	$scope.courseStatementClass = 'panel-warning';

	// }
}]);