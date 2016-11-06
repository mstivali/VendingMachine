Project Requirements:

All projects contained in one solution and are able to be self­hosted. Any external dependencies should be automatically installed with a single script/package install (PowerShell, gulp, NuGet, Bower, etc). State persistence between program runs is not required. If implemented, a method to reset the initial system state should be provided.
Functional Requirements
● web page interface to simulate physical payments and item selection
● the design should allow the user to quickly purchase an item with the minimum amount
of clicks and mouse movement to reduce user error
● the interface should be designed for touchscreen compatibility (not required to make
touch actually work)
● system should accept cash or credit cards
○ the following cash denomination are accepted: $1, 25¢, 10¢, 5¢
○ credit card payments can be simulated by entering the credit card #
● credit card processing should be mocked out as an external service
○ takes in the credit card #
○ returns a success for numbers with a length of 16, otherwise returns a failure
● current product inventory should be listed on the screen with item #, price, and name
● system should track remaining quantity for each product, and visibly indicate to the user
items that are sold out
● for demo, the initial state should load 10 items with a quantity of 5 of each
● an error message should be displayed when no matching product is found (either
missing item #, or sold out)
● selecting a product can be canceled, returning current payments to the customer (if any)
● for cash payments, assume exact change is required and the machine does not
dispense change
For any requirements not explicitly stated, use your best judgment to proceed. Be prepared to explain what motivated a particular decision.

Requirements:
1) nodeJS and npm
2) bower cli
3) grunt cli

Solution:

# vending-machine

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
# VendingMachine
