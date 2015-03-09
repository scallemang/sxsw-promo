'use strict';
angular.module('myApp.foot.foot-directive', [])
    .controller('FooterCtrl', ['$scope',function($scope) {
  }])
  .directive('foot', function() {
    return {
      templateUrl: 'mvc/foot/foot.html'
    };
  });