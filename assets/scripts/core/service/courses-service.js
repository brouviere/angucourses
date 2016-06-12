mainApp.service('courses', function () {
	this.getCourses = function () {
		return [{
				id:0,
				title:'Learn PHP5',
				tech:'PHP',
				description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, ipsa sint esse nemo! Nemo, aperiam odio temporibus itaque assumenda aliquam. Aliquid distinctio asperiores, magnam beatae adipisci error, sequi magni perspiciatis!.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vitae ex quas, tenetur ipsum cupiditate voluptatem fugit laboriosam deserunt quod debitis nobis ullam, facilis delectus distinctio, quidem ipsa quasi quisquam.',
				difficulty: 3,
				online: true,
				started: true,
				complete: 25,
				finished: false,
				icon: 'assets/img/php5.png'
			},{
				id:1,
				title:'Learn SYMFONY2',
				tech:'PHP',
				description:'Symfony is a set of PHP Components, a Web Application framework, a Philosophy, and a Community — all working together in harmony.',
				difficulty: 5,
				online: false,
				started: false,
				complete: 0,
				finished: false,
				icon: 'assets/img/php5.png'
			},{
				id:2,
				title:'Learn ANGULARJS',
				tech:['JS','HTML'],
				description:'AngularJS is a JavaScript framework. It can be added to an HTML page with a <script> tag. AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.',
				difficulty: 5,
				online: true,
				started: true,
				complete: 50,
				finished: false,
				icon: 'assets/img/angularjs.png'
			},{
				id:3,
				title:'Learn JAVASCRIPT',
				tech:'JS',
				description:'JavaScript (qui est souvent abrégé en "JS") est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que node.js ou Apache CouchDB. C\'est un langage à objets utilisant le concept de prototype, disposant d\'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet. Apprenez-en plus sur JavaScript.',
				difficulty: 2,
				online: true,
				started: true,
				complete: 100,
				finished: true,
				icon: 'assets/img/js.png'
			},{
				id:4,
				title:'Learn HTML5',
				tech:'HTML',
				description:'Vous souhaitez créer vos propres sites web ? Vous êtes au bon endroit ! Dans ce cours, vous apprendrez comment utiliser HTML5 et CSS3, les deux langages de programmation à la base de tous les sites web.Vous pensez peut-être que vous n\'êtes pas fait pour apprendre un langage informatique, mais ne vous inquiétez pas : HTML et CSS sont des langages simples, que nous allons découvrir pas à pas, au cours de nombreux exercices. Vous serez bientôt capable d\'ajouter du texte à votre site, de construire un menu de navigation, d\'insérer des images ... Et bien plus encore !﻿﻿',
				difficulty: 1,
				online: true,
				started: false,
				complete: 0,
				finished: false,
				icon: 'assets/img/HTML5.png'
			},{
				id:5,
				title:'Learn CSS3',
				tech:['HTML','CSS'],
				description:'Vous souhaitez créer vos propres sites web ? Vous êtes au bon endroit ! Dans ce cours, vous apprendrez comment utiliser HTML5 et CSS3, les deux langages de programmation à la base de tous les sites web.Vous pensez peut-être que vous n\'êtes pas fait pour apprendre un langage informatique, mais ne vous inquiétez pas : HTML et CSS sont des langages simples, que nous allons découvrir pas à pas, au cours de nombreux exercices. Vous serez bientôt capable d\'ajouter du texte à votre site, de construire un menu de navigation, d\'insérer des images ... Et bien plus encore !﻿﻿',
				difficulty: 1,
				online: true,
				started: false,
				complete: 0,
				finished: false,
				icon: 'assets/img/css3.png'
			}];
	}
})