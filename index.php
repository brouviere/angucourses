<!DOCTYPE html>
<html lang="en">
<head>
	<base href="/ngroute/">
	<meta charset="UTF-8">
	<title>SinglePageApp (ngRoute)</title>
	<!-- BOOTSTRAP Latest compiled and minified CSS -->
	<link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/darkly/bootstrap.min.css" rel="stylesheet" integrity="sha384-kVo/Eh0sv7ZdiwZK32nRsp1FrDT3sLRLx3zVpSSTI9UdO5H02LJNLBg5F1gwvKg0" crossorigin="anonymous">
	<!-- CUSTOM STYLE -->
	<link rel="stylesheet" href="assets/styles/main.css">
	<!-- FONTAWESOME -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.9/font-awesome-animation.css">
</head>
<body ng-app="sopApp">
	<div class="header">
		<div class="col-xs-12 col-sm-7">
			<h1 class="main-title">
				<i class="fa fa-terminal faa-horizontal faa-slow animated hidden-xs"></i>
				ANGU<span>|Courses</span>
			</h1>
		</div>
	<!-- NAVIGATION BAR -->
		<div nav-bar>
			
		</div>

 		<!-- <div class="col-xs-12 col-sm-5">
			<ul class="nav nav-pills">
			  <li class="active"><a href="home">Courses</a></li>
			  <li><a href="contact">Contact</a></li>
			  <li class="dropdown">
			  	<a class="dropdown-toggle" data-toggle="dropdown" href="#">
			  		<img src="assets/img/profile.jpg" class="img-circle" alt="profile image">
			    </a>
			    <ul class="dropdown-menu">
			      <li><a href="#"><i class="fa fa-user"></i> Profile</a></li>
			      <li><a href="#"><i class="fa fa-gears"></i> Settings</a></li>
			      <li><a href="#"><i class="fa fa-question"></i> Help</a></li>
			      <li class="divider"></li>
			      <li><a href="#"><i class="fa fa-sign-out"></i> Logout</a></li>
			    </ul>
			  </li>
			</ul>	
		</div> -->

	<!-- NAVBAR -->
		<!-- <nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
						<span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
					</button>
					<a class="navbar-brand main-title" href="home">ANGU<span>|Courses</span></a>
				</div>

				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
			    	<ul class="nav navbar-nav">
			    		<li class="active"><a href="home">Home <span class="sr-only">(current)</span></a></li>
			    		<li><a href="contact">Contact</a></li>
			    	</ul>
			    	<form class="navbar-form navbar-left" role="search">
				        <div class="form-group">
				          <input class="form-control" placeholder="Find a course" type="text">
				        </div>
				        <button type="submit" class="btn btn-default">Submit</button>
				      </form>	
				</div>
		</nav> -->

	</div>
	<div class="container">

		<div class="col-xs-12" ng-view></div>

	</div>
	<!-- JQUERY -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<!-- BOOTSTRAP Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	<!-- Angular JS-->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
	<!-- CORE -->
	<script src="assets/scripts/core/app.js"></script>
	<!-- Angular Route -->
	<script src="node_modules/angular-route/angular-route.min.js"></script>
	<!-- CUSTOM Route -->
	<script src="assets/scripts/core/route.js"></script>
	<!-- HOME CONTROLLER -->
	<script src="assets/scripts/controllers/home-controller.js"></script>
	<!-- CONTACT CONTROLLER -->
	<script src="assets/scripts/controllers/contact-controller.js"></script>
	<!-- COURSE CONTROLLER -->
	<script src="assets/scripts/controllers/course-controller.js"></script>
	<!-- CUSTOM SERVICE -->
	<script src="assets/scripts/core/service/courses-service.js"></script>
	<!-- CUSTOM DIRECTIVE -->
	<script src="assets/scripts/core/directive/nav-bar.js"></script>
</body>
</html>