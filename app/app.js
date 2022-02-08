'use strict';

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}
// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'autoCompleteModule',
  'myApp.heroSearch',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/'});
}]);
