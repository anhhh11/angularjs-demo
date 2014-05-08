'us strict';

var app = angular.module('workspaceApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/posts/:postId',{
        templateUrl: 'views/postview.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/users/:username', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
  });
app.constant('FIREBASE_URL', 'https://glowing-fire-3555.firebaseio.com');
