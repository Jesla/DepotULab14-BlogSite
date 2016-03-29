//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ["ngRoute", "ngResource"]);


app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/listposts.html',
				controller: 'AllPostsCtrl'
			})
			.when('/singlepost', {
				templateUrl: 'views/singlepost.html',
				controller: 'SinglePostCtrl'
			})
			.when('/createpost', {
				templateUrl: 'views/createpost.html',
				controller: 'GoCreatePost'
			})          
			.otherwise({
				redirectTo: 'views/listposts.html'
			})
}]);

