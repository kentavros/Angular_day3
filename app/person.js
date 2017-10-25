angular.module('config2').component('person', {
  bindings: { person: '<' },
  template: '<h3>A person!</h3>' +
  
            '<div><strong>Name: {{$ctrl.person.name}}</strong></div>' +
            
            '<div>Company: {{$ctrl.person.company}}</div>' +
            '<div>Email: {{$ctrl.person.email}}</div>' +
            '<div>Address: {{$ctrl.person.address}}</div>' +
            
            '<button ui-sref="people">Close</button>'
});