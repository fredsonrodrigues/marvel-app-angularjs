angular.
  module('myApp').
  component('search', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'components/Search/search.template.html',
    controller: function SearchController($scope) {
      $scope.selected = ''
      $scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];

      $scope.colorName = null;
        
      $scope.autoCompleteOptions = {
            minimumChars: 3,
            itemSelected: function (item) {
              console.log(item)
            },
            data: function (searchText) {
                return $scope.names.filter((color) => {
                    return color.startsWith(searchText);
                });
            }
        }
    }
  });