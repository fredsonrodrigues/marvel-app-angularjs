'use strict';

angular.module('myApp.heroDetails', ['ngRoute']).
  component('heroDetails', {
    templateUrl: '/hero-details/hero-details.template.html',
    controller: ['$routeParams', 'Heroes', function heroDetailsController($routeParams, Heroes) {
      var self = this;
      self.hero = Heroes.findHero({ heroId: decodeURIComponent($routeParams.heroId) }, function(hero) {
        console.log(hero.data.results[0])
        self.setHero(hero.data.results)
      });

      self.setHero = function setHero(heroData) {
        self.herodata = heroData[0];
      };
    }]
  })