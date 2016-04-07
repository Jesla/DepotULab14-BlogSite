var app = angular.module("myBlogApp", ["ngRoute", "ngResource"]);


app.config(["$routeProvider", function ($routeProvider, $routeParams) {
    $routeProvider
        .when("/", {
            templateUrl: "views/listposts.html",
            controller: "AllPostsCtrl"
        })

        .when("/singlepost/:id", {
            templateUrl: "views/singlepost.html",
            controller: "SinglePostCtrl"
        })
        .when("/createpost", {
            templateUrl: "views/createpost.html",
            controller: "GoCreatePost"
        })
        .otherwise({
            redirectTo: "views/listposts.html"
        })
}]);

