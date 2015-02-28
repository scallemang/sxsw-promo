'use strict';
angular.module('myApp.foot.foot-directive', [])
    .controller('FooterCtrl', ['$scope',function($scope) {
    $scope.nav = {
    0: {
            "href" : "#/home",
            "title" : "Homepage",
            "text" : "Home",
            "class" : ""
        },
        1: {
            "href" : "#/page",
            "title" : "Sample Page",
            "text" : "Page ",
            "class" : ""
        },
        2: {
            "href" : "#",
            "title" : "Sample Page",
            "text" : "Page 2",
            "class" : ""
        },
        3: {
            "href" : "#",
            "title" : "Sample Page",
            "text" : "Page 3",
            "class" : ""
        },
        4: {
            "href" : "#",
            "title" : "Sample Page",
            "text" : "Page 4",
            "class" : ""
        },
        5: {
            "href" : "#",
            "title" : "Sample Page",
            "text" : "Page 5",
            "class" : ""
        },
        6: {
            "href" : "#",
            "title" : "Sample Page",
            "text" : "Page 6",
            "class" : ""
        }
        
        };
  }])
  .directive('foot', function() {
    return {
      templateUrl: '/mvc/foot/foot.html'
    };
  });