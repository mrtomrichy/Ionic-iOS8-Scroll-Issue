angular.module('starter')
.controller('HomeController', function($scope) {
  $scope.fakeArray = new Array(20);

  $scope.click = function(index) {
    console.log("You clicked %d", index);
  };
});
