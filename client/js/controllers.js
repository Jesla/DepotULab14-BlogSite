//Logic for page actions here. 

var controllers = angular.module('myBlogApp');

controllers.controller('mainBlogCtrl', ['$scope', '$rootScope', '$http', '$location',
	function($scope, $rootScope, $http, $location){

            
        		$scope.init = function(){
            $location.path('/listposts');
		};      
        
    }]);


    
  controllers.controller('goCreatePost', ['$scope', '$rootScope', '$http', '$location',
	function($scope, $rootScope, $http, $location){  
    
                            $scope.goCreatePost = function() {
        $location.url('/createpost');
    };
    
    }]);
    
    
    
    // controllers.controller('mainBlogCtrl', ['$scope', '$rootScope', '$http', '$location',
	// function($scope, $rootScope, $location){
    //         $location.path('/listposts');
    // }]);
    
    
    
    // 		$scope.init = function(){
	// 		$scope.getPosts();
	// 	};

	// 	$scope.getPosts = function(){  //SO WE'RE SAYING "HTTP, MAKE A GET REQUEST TO /MESSAGES
	// 		$http.get('http://localhost:3000/api/posts').then(function(data){ //.THEN IS A PROMISE. GET THIS INFORMATION, STORE IT IN "DATA" VARIABLE
	// 			$scope.posts = data;  //HERE, DATA IS AN ARRAY OF blog posts FROM THE SERVER
	// 		}, function(err) {
    //             console.error(err);
    //         });
	// 	};
    //             $scope.goCreatePost = function() {
    //     $location.url('views/createpost.html');
    // };
        
	
    


    
    
   
   
//    controllers.controller('mainBlogCtrl', ['$scope', '$rootScope', '$http', '$location',
// 	function($scope, $rootScope, $location){
//             $location.path('/listposts');
// 	}
// ]);
   
   
    
    




// controllers.controller('mainBlogCtrl', ['$scope', '$location', '$http', '$rootScope',
// 	function($scope, $location, $http, $rootScope){

// 		$scope.init = function(){
// 			$scope.getPosts();
// 		}
        
//         $scope.goBack = function() {
//             $location.path('/listposts');
//         }

// 		$scope.getPosts = function(){  //SO WE'RE SAYING "HTTP, MAKE A GET REQUEST TO /MESSAGES
// 			$http.get('http://localhost:3000/api/posts').then(function(data){ //.THEN IS A PROMISE. GET THIS INFORMATION, STORE IT IN "DATA" VARIABLE
// 				$scope.posts = data;  //HERE, DATA IS AN ARRAY OF blog posts FROM THE SERVER
// 			}, function(err) {
//                 console.error(err);
//             });
// 		};

// 		$scope.createPost = function() {
// 			var message = {
// 				text: $scope.newBlogPost,
// 				user: $rootScope.currentUserName
// 			};

// 			$scope.newBlogPost = '';

// 			$http.post('/listposts', message).then(function(resp){
// 				console.log('success');
//                 $scope.post.push(message);
// 			}, function(err) {
//                 console.error(err);
//             })
// 		}

// 	}]);








