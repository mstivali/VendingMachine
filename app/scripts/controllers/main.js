'use strict';

/**
 * @ngdoc function
 * @name vendingMachineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vendingMachineApp retreives product information
 * and manages properties for child component directives
 */
angular.module('vendingMachineApp')
  .controller('MainCtrl', function (MainService) {

    var self = this;

    init();

    self.products = [];
    self.selectedProduct = {};
    self.balance = 0.0;
    self.authCodes = {awaitingAuth: 0,authorized: 1,failed: 2};
    self.creditAuthorized = 0;

    function init() {
      MainService.getProducts().then(function(products) {
        self.products = products;
        self.selectedProduct = self.products[0];
      });
    }

  });
