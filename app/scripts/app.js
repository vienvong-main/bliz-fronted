(function () {
  'use strict';
  angular
      .module('blizFrontendApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
      ])
      .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'views/main.html',
              controller: 'mainCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'aboutCtrl'
            })
            .when('/contact', {
              templateUrl: 'views/contact.html',
              controller: 'contactCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });
      });

})();