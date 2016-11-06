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
    self.authCodes = {
      awaitingAuth: 0,
      authorized: 1,
      failed: 2
    };
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

    function init() {
      MainService.getProducts().then(function(products) {
        self.products = products;
        self.selectedProduct = self.products[0];
      });
    }

  });
