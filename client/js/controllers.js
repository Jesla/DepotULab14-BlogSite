var controllers = angular.module('myBlogApp');

controllers.controller('AllPostsCtrl', ['$scope', '$location', '$http', '$rootScope',
    function ($scope, $location, $http, $rootScope) {

        $scope.init = function () {
            $scope.getPosts();
        }

        $scope.getPosts = function () {
            $http.get('http://localhost:3000/api/posts').then(function (data) {
                $scope.posts = data.data;
            }, function (err) {
                console.error(err);
            });
        };

        $scope.goToCreate = function () {
            $location.path('/createpost');
        }

    }]);

controllers.controller('GoCreatePost', ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        $scope.submitPost = function () {
            var fullPost = {
                title: $scope.titleField,
                author: $scope.authorField,
                content: $scope.contentField,
            };
            console.log(fullPost);

            $scope.titleField = '';
            $scope.authorField = '';
            $scope.contentField = '';


            $http.post('http://localhost:3000/api/posts', fullPost).then(function (resp) {
                console.log(resp);
            }, function (err) {
                console.error(err);
            })

            $location.path('/');
            $http.get('http://localhost:3000/api/posts').then(function (data) {
                $scope.posts = data.data;
            }, function (err) {
                console.error(err);
            });
        };
    }]);


controllers.controller('SinglePostCtrl', ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        $scope.singleView = function (id) {
            // $location.path("/singlepost");
            // $http.get("http://localhost:3000/api/posts/#").then(function (data) {
            //     $scope.posts = data.data;
            // }, function (err) {
            //     console.error(err);
            // });
            console.log("button works");

        }

    }]);