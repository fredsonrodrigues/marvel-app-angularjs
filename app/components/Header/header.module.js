angular.
  module('myApp').
  component('marvelHeader', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: 'components/Header/header.template.html',
    controller: function PhoneListController() {
      this.backButton = false;
    }
  });