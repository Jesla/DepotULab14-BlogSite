var factories = angular.module("myBlogApp");
factories.factory("blogAppFactory", ["$resource", function ($resource) {
    var allPosts = $resource("http://localhost:3000/api/posts/:id");
    return allPosts;
}]);
