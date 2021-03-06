'use strict';

angular.module('myApp.heroSearch', ['ngRoute']).
  component('heroSearch', {
    templateUrl: '/hero-search/hero-search.template.html',
    controller: ['Heroes', function heroSearchController(Heroes) {
      var ctrl = this;
      ctrl.selected = ''
      ctrl.autoCompleteOptions = {
        minimumChars: 4,
        renderItem: function (item) {
          return {
              id: item.id,
              value: item.name,
              label: "<a href='#!/search/"+item.id+"' class='auto-complete' ng-bind-html='item.name'></a>"
          };
        },
        data: function (searchText) {
          var heroes = Heroes.get({ search: searchText });
          return heroes.$promise.then(function (result) {
            return result.data?.results;
          });
        }
      }
    }]
  })