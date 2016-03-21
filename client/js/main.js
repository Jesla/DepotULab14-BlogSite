//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ["ngRoute", "ngResource"]);


app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', { //when this page loads...load this url and controller
				templateUrl: 'views/listposts.html',
				controller: 'mainBlogCtrl'
			})
			.when('/singlepost', {
				templateUrl: 'views/singlepost.html',
				controller: 'singlePostCtrl'
			})
			.when('/createpost', {
				templateUrl: 'views/createpost.html',
				controller: 'goCreatePost'
			})          
			.otherwise({
				redirectTo: 'views/createpost.html'
			})
}]);




