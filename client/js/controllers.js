var controllers = angular.module("myBlogApp");

controllers.controller("AllPostsCtrl", ["$scope", "$location", "$rootScope", "$routeParams", "blogAppFactory",
    function ($scope, $location, $rootScope, $routeParams, blogAppFactory) {

        $scope.init = function () {
            $scope.getPosts();
        }

        $scope.getPosts = function () {
            blogAppFactory.query().$promise.then(function (data) {
                $scope.posts = data;
                console.log(data);
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

controllers.controller("GoCreatePost", ["$scope", "$rootScope", "$location", "blogAppFactory",
    function ($scope, $rootScope, $location, blogAppFactory) {

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


            blogAppFactory.save().$promise.then(function (resp) {
                console.log(resp);
            }, function (err) {
                console.error(err);
            })

            $location.path("/");
        };
    }]);


controllers.controller("SinglePostCtrl", ["$scope", "$rootScope", "$location", "$routeParams", "blogAppFactory",
    function ($scope, $rootScope, $location, $routeParams, blogAppFactory) {


       blogAppFactory.get().$promise.then(function (data) {
            $scope.post = data;
            console.log("single view button works");
            console.log(data);

        }, function (err) {
            console.error(err);
        });

        $scope.goBack = function () {
            $location.path("/");
        }
    }]);