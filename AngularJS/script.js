var numero1 = 3
var numero2 = 3
var Brandon = angular.module('Brandon', []);
Brandon.controller('Operaciones', function($scope) {
  $scope.contador = numero1 + numero2;
  $scope.contador1 = numero1 * numero2;
}); 


