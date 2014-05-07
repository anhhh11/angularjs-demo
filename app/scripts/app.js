'use strict';

var app = angular.module('workspaceApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.constant('FIREBASE_URL', 'https://glowing-fire-3555.firebaseio.com');
