'use strict';
angular.module('myApp.topper.topper-directive', [])
    .controller('TopperCtrl', ['$scope', '$window',function($scope, $window) {
        
        //Only show contact bar on homepage
        if ( $window.location.pathname === '/' || $window.location.pathname === '/index' ) {
            $scope.rootPath = true;    
        }

  }])
  .directive('topper', function() {
    return {
      templateUrl: 'mvc/topper/topper.html'
    };
  });