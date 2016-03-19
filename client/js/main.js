//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('', []);

app.controller('mainBlogCtrl', ['$scope', '$rootScope', '$location',
	function($scope, $rootScope, $location){
		$scope.setUser = function(view){
			$rootScope.currentUserName = $scope.userName;
			$scope.userName = '';
            $location.path('/listposts');
		};
	}
]);










app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
			.when('/listposts', { //when this page loads...load this url and controller
				templateUrl: 'listposts.html',
				controller: 'mainBlogCtrl'
			})
			.when('/singlepost', {
				templateUrl: 'singlepost.html',
				controller: 'singlePostCtrl'
			})
			.when('/createpost', {
				templateUrl: 'createpost.html',
				controller: 'createPostCtrl'
			})          
			.otherwise({
				redirectTo: '/listposts'
			})
}])









