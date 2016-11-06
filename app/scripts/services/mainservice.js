'use strict';

/**
 * @ngdoc service
 * @name vendingMachineApp.MainService
 * @description
 * # MainService
 * Factory in the vendingMachineApp.
 */
angular.module('vendingMachineApp')
  .factory('MainService', function ($http, $q) {

    var MainService = {};

    MainService.getProducts = function() {
      var deferred = $q.defer();
      $http.get('content.json').then(function(response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };

    return MainService;
  });
