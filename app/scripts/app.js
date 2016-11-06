'use strict';

/**
 * @ngdoc overview
 * @name vendingMachineApp
 * @description
 * # vendingMachineApp
 *
 * Main module of the application.
 */
angular
  .module('vendingMachineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularSpinner'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: '$ctrl'
      });
  });
