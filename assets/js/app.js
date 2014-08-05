'use strict';


// Declare app level module which depends on filters, and services
angular.module('mash', [
  'ngRoute',
  'mash.filters',
  'mash.services',
  'mash.directives',
  'mash.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/home/:tag', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/photo/:id', {templateUrl: 'partials/detail.html', controller: 'detailCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);