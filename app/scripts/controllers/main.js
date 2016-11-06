'use strict';

/**
 * @ngdoc function
 * @name vendingMachineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vendingMachineApp
 */
angular.module('vendingMachineApp')
  .controller('MainCtrl', function (MainService) {

    var self = this;

    init();

    self.products = [];
    self.selectedProduct = {};

    self.select = function(product) {
      self.selectedProduct = product;
    };

    function init() {
      MainService.getProducts().then(function(products) {
        self.products = products;
        self.selectedProduct = self.products[0]
      });
    }

  });
