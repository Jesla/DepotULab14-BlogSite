var controllers = angular.module("myBlogApp");

controllers.controller("AllPostsCtrl", ["$scope", "$location", "$rootScope", "$routeParams", "blogAppFactory",
    function ($scope, $location, $rootScope, $routeParams, blogAppFactory) {


        $scope.getPosts = function () {
            blogAppFactory.query().$promise.then(function (data) {
                $scope.posts = data;
            }, function (err) {
                console.error(err);
            });
        };

        $scope.getPosts();

        $scope.goToCreate = function () {
            $location.path("/createpost");
        }

        $scope.singleView = function (id) {
            $location.path("/singlepost/" + id);
        };

    }]);

controllers.controller("GoCreatePost", ["$scope", "$rootScope", "$location", "blogAppFactory",
    function ($scope, $rootScope, $location, blogAppFactory) {

        $scope.titleField = "";
        $scope.authorField = "";
        $scope.contentField = "";

        $scope.submitPost = function () {
            var fullPost = {
                title: $scope.titleField,
                author: $scope.authorField,
                content: $scope.contentField,
            };


            if ($scope.titleField.length === 0 || $scope.authorField.length === 0 || $scope.contentField.length === 0) {
                alert("All Fields Required")
            } else {
                $scope.titleField = "";
                $scope.authorField = "";
                $scope.contentField = "";


                blogAppFactory.save(fullPost).$promise.then(function (resp) {
                }, function (err) {
                    console.error(err);
                })

                $location.path("/");
            }

        };
    }]);


controllers.controller("SinglePostCtrl", ["$scope", "$rootScope", "$location", "$routeParams", "blogAppFactory",
    function ($scope, $rootScope, $location, $routeParams, blogAppFactory) {

        var singleViewPage = $routeParams.id

        blogAppFactory.get({ id: singleViewPage }).$promise.then(function (data) {
            $scope.post = data;

        }, function (err) {
            console.error(err);
        });

        $scope.goBack = function () {
            $location.path("/");
        }
    }]);