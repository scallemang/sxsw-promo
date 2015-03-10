'use strict';
//Register app level module defined in mvc modules
angular.module('myApp', [
  //Angular Dependencies
  'ngRoute',
  //Register component modules
  'myApp.topper',
  'myApp.foot'
]);

$( document ).ready( function() {
    
    if(!$.cookie('modal')) {
        $( '#welcomeModal' ).modal( 'toggle' );
    }

    $('#welcomeModal').on('hidden.bs.modal', function (e) {
        $.cookie('modal', 'isSet', { expires: 7 });
    })

});
