'use strict';

angular.module('myApp.heroSearch').
  component('heroSearch', {
    templateUrl: '/hero-search/hero-search.template.html',
    controller: ['Heroes', function heroSearchController(Heroes) {
      var ctrl = this;
      ctrl.selected = ''
      ctrl.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];

      ctrl.autoCompleteOptions = {
        minimumChars: 2,
        itemSelected: function (item) {
          console.log(item)
        },
        data: function (searchText) {
          var heroes = Heroes.query();
          return heroes.$promise.then(function (result) {
            return result.filter((todos) => {
              return todos.title.startsWith(searchText);
            }).map(e => e.title);
          });
        }
      }
    }]
  })