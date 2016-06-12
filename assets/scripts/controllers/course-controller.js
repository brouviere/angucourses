mainApp.controller('CoursesController', ['$scope', 'courses','$routeParams', function($scope,$courses,$routeParams) {
	// console.log($courses.getCourses());
	var coursesList = $courses.getCourses();
	// console.log($routeParams);

	// récupération de l'id qui est envoyé en paramètres dans l'url + conversion en integer
	var idSearch = parseInt($routeParams.id);
	var difficulty = [];
	var courseFound={};

	for (var i = 0; i < coursesList.length; i++) {
		if(coursesList[i].id === idSearch){
			courseFound = coursesList[i];
			
			for (var j = 0; j < courseFound.difficulty; j++) {
				difficulty.push(j);
			}
			break;
		}
	}

	console.log(courseFound);

	// On teste si l'objet est différent de vide
	if (courseFound.id !== undefined) {
		$scope.courseFound = courseFound;
		$scope.courseFound.difficultyIcon = difficulty;
		// console.log(typeof($scope.courseFound.icon));
		$scope.courseFound.previousCourse = courseFound.id-1;
		$scope.courseFound.nextCourse = courseFound.id+1;
	}


	
	 
}]);