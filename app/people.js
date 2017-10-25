angular.module('config2').component('people', {
  bindings: { people: '<' },
  
  template: '<h3>Some Peopls:</h3>' +
            '<ul>' +
            '  <li ng-repeat="person in $ctrl.people">' +
            '    <a ui-sref="person({ personId: person.id })">' +
            '      <strong>{{person.name}}</strong>' +
            '    </a>' +
            '  </li>' +
            '</ul>'
})