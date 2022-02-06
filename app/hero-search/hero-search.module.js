'use strict';

angular.module('myApp.heroSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'hero-search/hero-search.template.html',
    controller: 'HeroSearchCtrl'
  });
}])

.controller('HeroSearchCtrl', [function() {

}]);