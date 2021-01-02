'use strict';

/**
 * @ngdoc overview
 * @name currencyApp
 * @description
 * # currencyApp
 *
 * Main module of the application.
 */
angular
  .module('currencyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/currency-list', {
        templateUrl: 'views/currency-list.html',
        controller: 'currencylistCtrl',
        controllerAs: 'currency-list'
      })
      .when('/currency-add', {
        templateUrl: 'views/currency-add.html',
        controller: 'currencyAddCtrl',
        controllerAs: 'currency-add'
      })
      .when('/currency-edit/:id', {
        templateUrl: 'views/currency-edit.html',
        controller: 'currencyEditCtrl',
        controllerAs: 'currency-edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
