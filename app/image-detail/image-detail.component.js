'use strict';

angular.
  module('testApp').
  component('imageDetail', {

    templateUrl: 'image-detail/image-detail.template.html',
    
    controller: ['$scope','$http', '$routeParams',function ImageDetailController( $scope ,$http, $routeParams) {
        var self = this;
        $http.get('http://www.reddit.com/r/pics/.json?jsonp=')
            .success(function(data, status, headers, config) {
            console.log("YES CLEARED DETAILS");
            // Loop over all
            console.log($routeParams.imageId);
            var x;
            var y = data.data.children;
            for (x=0; x< y.length; x++) {
              console.log(y[x].data.id);
              if(y[x].data.id === $routeParams.imageId) break;
            }
            $scope.img = y[x];
            console.log("found");
            
            })
            .error( function(error, status, headers, config) {
            console.log(status);
            console.log("Error occured");
            });
      }
    ]
  });

  


