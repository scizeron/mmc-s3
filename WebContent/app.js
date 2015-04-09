'use strict';

var myApp = angular.module('myApp', []);
myApp.controller('appCtrl', ['$scope', '$http', '$window', 
 function($scope, $http, $window) {
  $http.get('assets/mmc-web.json').success(function(jsonRole) {
   var role = {"name" : jsonRole.name, "url" : jsonRole.scheme + '://' + jsonRole.host};
   if (jsonRole.port != null && jsonRole.port != 443 && jsonRole.port != 80) {
    role.url = role.url + ':' + jsonRole.port;
   }
   $window.location.href = role.url + '/mmc';
  });
 }
]);
