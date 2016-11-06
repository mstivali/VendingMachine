'use strict';

/**
 * @ngdoc directive
 * @name vendingMachineApp.directive:productSelection
 * @description
 * # productSelection
 */
angular.module('vendingMachineApp')
  .directive('productSelection', function () {
    return {
      scope: {},
      replace: true,
      bindToController: {
        products: '=',
        selectedProduct: '=',
        balance: '=',
        creditAuthorized: '=',
        authCodes: '=',
        creditCardNumber: '='
      },
      controller: function() {
        var self = this;

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

      },
      controllerAs: '$ctrl',
      templateUrl: 'scripts/directives/product-selection/tpl.html',
      restrict: 'E'
    };
  });
