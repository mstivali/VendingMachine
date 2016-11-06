Project Requirements:

All projects contained in one solution and are able to be self­hosted. Any external dependencies should be automatically installed with a single script/package install (PowerShell, gulp, NuGet, Bower, etc). State persistence between program runs is not required. If implemented, a method to reset the initial system state should be provided.
Functional Requirements

1) web page interface to simulate physical payments and item selection.

2)the design should allow the user to quickly purchase an item with the minimum amount
of clicks and mouse movement to reduce user error

3) the interface should be designed for touchscreen compatibility (not required to make touch actually work)

4) system should accept cash or credit cards
  a. the following cash denomination are accepted: $1, 25¢, 10¢, 5¢
  b. credit card payments can be simulated by entering the credit card #

5) credit card processing should be mocked out as an external service
  a. takes in the credit card #
  b. returns a success for numbers with a length of 16, otherwise returns a failure

6) current product inventory should be listed on the screen with item #, price, and name

7) system should track remaining quantity for each product, and visibly indicate to the user
items that are sold out

8) for demo, the initial state should load 10 items with a quantity of 5 of each

9) an error message should be displayed when no matching product is found (either
missing item #, or sold out)

10) selecting a product can be canceled, returning current payments to the customer (if any)

11) for cash payments, assume exact change is required and the machine does not
dispense change


Solution:

Required tools:
1) nodeJS and npm
2) bower cli
3) grunt cli

# vending-machine

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
# VendingMachine
