'use strict';

describe('Directive: payments', function () {

  // load the directive's module
  beforeEach(module('vendingMachineApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<payments></payments>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the payments directive');
  }));
});
