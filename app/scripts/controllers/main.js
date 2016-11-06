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

    self.dispense = function() {
      if((self.selectedProduct.price === self.balance || self.creditAuthorized)
          && self.selectedProduct.qty > 0) {
          console.log(self.selectedProduct.qty);
          for(var i=0; i<self.products.length; i++) {
            if(self.products[i].id === self.selectedProduct.id
                && self.products[i].qty > 0) {
              self.products[i].qty -= 1;
            }
          }
          resetCoins();
          resetCreditAuth();
          console.log("Dispensed product");
      } else if(!self.creditAuthorized && self.balance === 0.0) {
          console.log("Please add payment");
      } else if(self.balance > self.selectedProduct.price || self.balance < self.selectedProduct.price) {
          resetCoins();
          console.log("Please deposit exact amount in coins");
      } else if(self.selectedProduct.qty === 0) {
          console.log("Product is sold out");
      }
    };

    function resetCoins() {
      self.balance = 0.0;
    }

    function resetCreditAuth() {
      self.creditCardNumber = '';
      self.creditAuthorized = self.authCodes.awaitingAuth;
    }

    function init() {
      MainService.getProducts().then(function(products) {
        self.products = products;
        self.selectedProduct = self.products[0];
      });
    }

  });
