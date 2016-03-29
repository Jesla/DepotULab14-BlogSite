var controllers = angular.module('myBlogApp');

// controllers.controller('MainBlogCtrl', ['$scope', '$rootScope', '$http', '$location',
//     function ($scope, $rootScope, $http, $location) {


//         $scope.init = function () {
//             $location.path('/listposts');
//         };

//     }]);

controllers.controller('AllPostsCtrl', ['$scope', '$location', '$http', '$rootScope',
    function ($scope, $location, $http, $rootScope) {

        $scope.init = function () {
            $scope.getPosts();
        }


        $scope.getPosts = function () {
            $http.get('http://localhost:3000/api/posts').then(function (data) {
                // $scope.posts = data;
            }, function (err) {
                console.error(err);
            });
        };
        
        $scope.goToCreate = function() {
            console.log('inside goToCreate');
             $location.path('/createpost');
        }

        
    }]);
    
controllers.controller('GoCreatePost', ['$scope', '$rootScope', '$http', '$location',
        function ($scope, $rootScope, $http, $location) {

            // $scope.goCreatePost = function () {
            //     $location.url('/createpost');
            // };

}]);


