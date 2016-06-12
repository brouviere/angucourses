mainApp.factory('courses', function () {
	return {
		getCourses : function () {
			courses =[{
				id:0,
				title:'Learn PHP5',
				tech:'PHP5',
				description:'PHP (officiellement, ce sigle est un acronyme récursif pour PHP Hypertext Preprocessor) est un langage de scripts généraliste et Open Source, spécialement conçu pour le développement d\'applications web. Il peut être intégré facilement au HTML.',
				difficulty: 3,
				online: true
			},{
				id:1,
				title:'Learn SYMFONY2',
				tech:'PHP5',
				description:'Symfony is a set of PHP Components, a Web Application framework, a Philosophy, and a Community — all working together in harmony.',
				difficulty: 5,
				online: false
			},{
				id:2,
				title:'Learn JAVASCRIPT',
				tech:'JS',
				description:'JavaScript (qui est souvent abrégé en "JS") est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que node.js ou Apache CouchDB. C\'est un langage à objets utilisant le concept de prototype, disposant d\'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet. Apprenez-en plus sur JavaScript.',
				difficulty: 1,
				online: true
			}];
			return (Courses);
		}
	}});