'use strict';
angular.module('myApp.topper.topper-directive', [])
    .controller('TopperCtrl', ['$scope',function($scope) {
    $scope.nav = {
        0: {
                "href" : "#/home",
                "title" : "Homepage of CoderDojo Canada",
                "text" : "Home",
                "class" : ""
            },
            1: {
                "href" : "#/pack",
                "title" : "Sample Pack CoderDojo Canada",
                "text" : "Pack",
                "class" : ""
            }
            /*,
            2: {
                "href" : "#/contact",
                "title" : "Contact CoderDojo Canada",
                "text" : "Contact",
                "class" : ""
            }*/
        };
  }])
  .directive('topper', function() {
    return {
      templateUrl: '/mvc/topper/topper.html'
    };
  });