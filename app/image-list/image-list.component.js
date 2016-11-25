'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('testApp').
  component('imageList', {
    
    templateUrl:'image-list/image-list.template.html',

    controller: ['$scope','$http', function ImageListController($scope,$http) {
      $http.get('http://www.reddit.com/r/pics/.json?jsonp=')
            .success(function(data, status, headers, config) {
            $scope.images = data.data.children;
            $scope.statuscode = status;
            console.log("YES CLEARED");
            console.log(data.kind);       
            })
            .error( function(error, status, headers, config) {
            console.log(status);
            console.log("Error occured");
            });
    }]
    
  });
