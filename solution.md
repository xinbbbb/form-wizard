
# BuyInsurance

This is a multi-step form (wizard) for user to provide information, get insurance policy price and buy an insurance policy.

## Assumptions
1. If user age is less than 1, we also direct him to `Page 2 - age error` when clicking on `Next` button.
2. The maxinum age user can input is 120.

## Solution formulation
Steps I thought of and executed for calculating the policy price:

1. Store the mapping of country, currency and rate in an array.
2. Use Vuex to manage the shared usage of the array in different pages.
3. Calculate the policy price based on user input and country array.

## Libraries/Tools used
* Vuex for centralized store for all the components in this application.
* Vue-router for component-based router configuration.
* vanilla CSS for UI.

## How to setup
Run the following commands to setup, given `yarn` is available:

1. ```git clone https://github.com/xinbbbb/form-wizard.git```
2. ```cd form-wizard/```
3. ```yarn install```
4. ```yarn serve```