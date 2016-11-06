'use strict';

/**
 * @ngdoc directive
 * @name vendingMachineApp.directive:menu
 * @description
 * # menu displays product images and sets
 * # selected product in parent controller
 * # to be displayed by detail view
 */
angular.module('vendingMachineApp')
  .directive('menu', function () {
    return {
      scope: {},
      replace: true,
      bindToController: {
        products: '=',
        selectedProduct: '='
      },
      controller: function() {
        var self = this;
        self.select = function(product) {
          self.selectedProduct = product;
        };
      },
      controllerAs: '$ctrl',
      templateUrl: 'scripts/directives/menu/tpl.html',
      restrict: 'E'
    };
  });
