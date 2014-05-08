'use strict';
app.controller('PostCtrl', function ($scope,$location,Post) {
	if ($location.path() === '/') {
		$scope.posts = Post.all;
	}
	$scope.post = {url: 'http://'};


	$scope.deletePost = function (postId) {
		Post.delete(postId);
	};

});

