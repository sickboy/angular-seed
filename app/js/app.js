(function() {
  'use strict';
  this.angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives']).config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'partials/partial1.html',
        controller: MyCtrl1
      }).when('/view2', {
        templateUrl: 'partials/partial2.html',
        controller: MyCtrl2
      }).otherwise({
        redirectTo: '/view1'
      });
    }
  ]);

}).call(this);
