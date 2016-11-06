'use strict';

/**
 * @ngdoc directive
 * @name vendingMachineApp.directive:productSelection
 * @description
 * # productSelection component displays the selected product
 * # and enables the user to dispense the product, displaying
 * # appropriate error messages when required
 */
angular.module('vendingMachineApp')
  .directive('productSelection', function (Notification) {
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
              for(var i=0; i<self.products.length; i++) {
                if(self.products[i].id === self.selectedProduct.id
                    && self.products[i].qty > 0) {
                  self.products[i].qty -= 1;
                }
              }
              resetCoins();
              resetCreditAuth();
              Notification.success({message: 'Dispensed Product', positionX: 'center', positionY: 'top'});
          } else if(!self.creditAuthorized && self.balance === 0.0) {
              Notification.error({message: 'Please add payment.', positionY: 'top', positionX: 'center'});
          } else if(self.balance > self.selectedProduct.price || self.balance < self.selectedProduct.price) {
              resetCoins();
              Notification.error({message: 'Please deposit exact amount in coins.', positionY: 'top', positionX: 'center'});
          } else if(self.selectedProduct.qty === 0) {
              Notification.error({message: 'Product is sold out.', positionY: 'top', positionX: 'center'});
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
