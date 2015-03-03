'use strict';
//Register app level module defined in mvc modules
angular.module('myApp', [
  //Angular Dependencies
  'ngRoute',
  //Register component modules
  'myApp.topper',
  'myApp.foot'
])


$( document ).ready( function() {
    $( '#myModal' ).modal( 'toggle' );
});