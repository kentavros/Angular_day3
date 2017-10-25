angular.module('config2').component('people', {
  bindings: { people: '<' },
  
  template: '<h3 style="color: darkblue">some individuals:</h3>' +
            '<ul>' +
            '  <li ng-repeat="person in $ctrl.people" style="list-style-type: none">' +
            '    <a class="link" ui-sref="person({ personId: person.id })">' +
            '      <strong>{{person.name}}</strong>' +
            '    </a>' +
            '  </li>' +
            '</ul>'
})