var controllers = angular.module('myBlogApp');

controllers.controller('mainBlogCtrl', ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {


        $scope.init = function () {
            $location.path('/listposts');
        };

    }]);

controllers.controller('blogPostList', ['$scope', '$location', '$http', '$rootScope',
    function ($scope, $location, $http, $rootScope) {

        $scope.init = function () {
            $scope.getPosts();
        }


        $scope.getPosts = function () {
            $http.get('http://localhost:3000/api/posts').then(function (data) {
                $scope.posts = data;
            }, function (err) {
                console.error(err);
            });
        };

        controllers.controller('goCreatePost', ['$scope', '$rootScope', '$http', '$location',
            function ($scope, $rootScope, $http, $location) {

                $scope.goCreatePost = function () {
                    $location.url('/createpost');
                };

        }]);

    }]);