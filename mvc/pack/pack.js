'use strict';

angular.module('myApp.pack', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pack', {
        templateUrl: '/mvc/pack/pack.html',
        controller: 'PackCtrl'
    });
}])

.controller('PackCtrl', ['$scope','$http','$sce', PackCtrl]);

function PackCtrl($scope, $http, $sce) {
    $http.get('/scripts/packs/ruby-games.json')
    .success(function (data) {
        $scope.data = data;
    });

    $scope.trustAsHtml = function(code) {
        return $sce.trustAsHtml(code);
    };
}