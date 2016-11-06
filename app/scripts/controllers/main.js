'use strict';

/**
 * @ngdoc function
 * @name vendingMachineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vendingMachineApp
 */
angular.module('vendingMachineApp')
  .controller('MainCtrl', function ($timeout, usSpinnerService, MainService) {

    var self = this;

    init();

    self.products = [];
    self.selectedProduct = {};
    self.balance = 0.0;
    self.creditAuthorized;

    function init() {
      MainService.getProducts().then(function(products) {
        self.products = products;
        self.selectedProduct = self.products[0];
      });
    }

  });
