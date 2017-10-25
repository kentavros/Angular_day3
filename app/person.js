angular.module('config2').component('person', {
  bindings: { person: '<' },
  template: '<h3>A person!</h3>' +
  
            '<div><strong>Name: {{$ctrl.person.name}}</strong></div>' +
            '<div style="">Id: {{$ctrl.person.id}}</div>' +
            '<button class="btn alert-danger" ui-sref="people">Back</button>'
});