'use strict';

/**
 * @ngdoc directive
 * @name vendingMachineApp.directive:payments
 * @description
 * # payments directive adds coins to cash balance
 * # and machs a credit card authorization, where
 * # credit cards are authorized only if they have
 * # 16 digit numbers
 */
angular.module('vendingMachineApp')
  .directive('payments', function () {
    return {
      scope: {},
      replace: true,
      bindToController: {
        balance: '=',
        creditCardNumber: '=',
        creditAuthorized: '=',
        authCodes: '='
      },
      controller: function($timeout, usSpinnerService) {
        var self = this;

        self.creditAuthorized = self.authCodes.awaitingAuth;

        self.addCoin = function(denomination) {
          var coinValue;
          switch(denomination) {
            case 'penny':
              coinValue = 0.01;
              break;
            case 'nickel':
              coinValue = 0.05;
              break;
            case 'dime':
              coinValue = 0.10;
              break;
            case 'quarter':
              coinValue = 0.25;
              break;
            default:
              break;
          }
          self.balance += coinValue;
        };

        self.returnCoins = function() {
          self.balance = 0.0;
        };

        self.authorize = function(creditCardNumber) {
          usSpinnerService.spin('spinner')
          $timeout(function() {
            usSpinnerService.stop('spinner');
            if(creditCardNumber.length === 16) self.creditAuthorized = self.authCodes.authorized;
            else self.creditAuthorized = self.authCodes.failed;
          }, 3000);
        };

        self.cancel = function() {
          self.creditAuthorized = self.authCodes.awaitingAuth;
        };

      },
      controllerAs: '$ctrl',
      templateUrl: 'scripts/directives/payments/tpl.html',
      restrict: 'E'
    };
  });
