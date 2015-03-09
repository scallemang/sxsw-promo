'use strict';
angular.module('myApp.topper.topper-directive', [])
    .controller('TopperCtrl', ['$scope',function($scope) {
  }])
  .directive('topper', function() {
    return {
      templateUrl: 'mvc/topper/topper.html'
    };
  });