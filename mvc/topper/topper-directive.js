'use strict';
angular.module('myApp.topper.topper-directive', [])
    .controller('TopperCtrl', ['$scope',function($scope) {
    $scope.nav = {
    0: {
            "href" : "#/home",
            "title" : "Homepage",
            "text" : "Home",
            "class" : ""
        },
        1: {
            "href" : "#/method",
            "title" : "Method Page",
            "text" : "Method",
            "class" : ""
        },
        2: {
            "href" : "#/standard",
            "title" : "Standard Page",
            "text" : "Standard",
            "class" : ""
        },
        3: {
            "href" : "#/dna_mrkt",
            "title" : "DNA Market",
            "text" : "DNA Market",
            "class" : ""
        },
        4: {
            "href" : "#/about",
            "title" : "About",
            "text" : "About",
            "class" : ""
        }
        
        };
  }])
  .directive('topper', function() {
    return {
      templateUrl: '/mvc/topper/topper.html'
    };
  });