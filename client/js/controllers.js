var controllers = angular.module("myBlogApp");

controllers.controller("AllPostsCtrl", ["$scope", "$location", "$http", "$rootScope", "$routeParams",
    function ($scope, $location, $http, $rootScope, $routeParams) {

        $scope.init = function () {
            $scope.getPosts();
        }

        $scope.getPosts = function () {
            $http.get("http://localhost:3000/api/posts").then(function (data) {
                $scope.posts = data.data;
            }, function (err) {
                console.error(err);
            });
        };

        $scope.goToCreate = function () {
            $location.path("/createpost");
        }

        $scope.singleView = function (id) {
            console.log('button works');
            console.log(id);
            $location.path("/singlepost/" + id);
        };

    }]);

controllers.controller("GoCreatePost", ["$scope", "$rootScope", "$http", "$location",
    function ($scope, $rootScope, $http, $location) {

        $scope.submitPost = function () {
            var fullPost = {
                title: $scope.titleField,
                author: $scope.authorField,
                content: $scope.contentField,
            };
            console.log(fullPost);

            $scope.titleField = "";
            $scope.authorField = "";
            $scope.contentField = "";


            $http.post("http://localhost:3000/api/posts", fullPost).then(function (resp) {
                console.log(resp);
            }, function (err) {
                console.error(err);
            })

            $location.path("/");
            $http.get("http://localhost:3000/api/posts").then(function (data) {
                $scope.posts = data.data;
            }, function (err) {
                console.error(err);
            });
        };
    }]);


controllers.controller("SinglePostCtrl", ["$scope", "$rootScope", "$http", "$location", "$routeParams",
    function ($scope, $rootScope, $http, $location, $routeParams) {

        var singleViewPage = $routeParams.id

        $http.get("http://localhost:3000/api/posts/" + singleViewPage).then(function (data) {
            $scope.post = data.data;
            console.log("single view button works");
            console.log(data);

        }, function (err) {
            console.error(err);
        });

        $scope.goBack = function () {
            $location.path("/");
        }
    }]);