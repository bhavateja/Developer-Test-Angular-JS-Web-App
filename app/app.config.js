angular.
  module('testApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/images', {
          template: '<image-list></image-list>'
        }).
        when('/images/:imageId', {
          template: '<image-detail></image-detail>'
        }).
        otherwise('/images');
    }
  ]);