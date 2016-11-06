'use strict';

/**
 * @ngdoc directive
 * @name vendingMachineApp.directive:menu
 * @description
 * # menu
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
