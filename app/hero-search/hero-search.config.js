'use strict';

angular.module('myApp.heroSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    template: '<hero-search></hero-search>'
  });
}])