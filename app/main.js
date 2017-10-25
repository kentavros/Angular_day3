
var app = angular.module("app", [])
app.controller('SettingsController1', SettingsController1)
function SettingsController1($scope, listFn){
    console.log(listFn)
    this.name = 'John Smith';
    $scope.name = 'Vasya';
    $scope.test = {name: 'Fedia', last: 'Petrov'};
    $scope.list = ['Vasya', 'Petia', 'Fedia', 'Sasha', 'Vova'];

    var self = this
    self.names = []
    self.addName = function(name){
        self.names.push(name)
    }
}


app.directive('myInput', function(){
    return{
        // restrict: 'E',
        // transclude: true,
        scope: {
            customerName: '=info'
        },
        controller:function($scope){
            console.log($scope.customerName)
        },
        templateUrl: 'input.html',
    };
});

app.factory('listFn', function(){
    return 'tetstetetetetete'
})

angular.module('app')
.component('leftSide', {
    bindings: {items: '='},
    controller: leftSideController,
    templateUrl: 'leftSide.html'
});

angular.module('app')
.directive('myInput', {
    controller: function($scope){
        $scope.addName = function(name){
            $scope.items.push(name)
        }
    },
    templateUrl: 'input.html'
})

function leftSideController($scope){
    $scope.list
}


