'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/transactions', {templateUrl: 'partials/transactions/index.html', controller: 'transactions.index'});
  $routeProvider.when('/graphs', {templateUrl: 'partials/graphs.html', controller: 'graphs'});
  $routeProvider.otherwise({redirectTo: '/transactions'});
}]);
