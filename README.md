# Cypress 13.4.0 + Cucumber Confiq

## Step 0: Install Cypress
```
npm instal cypress --save-dev
```

## Step 1: Install cypress-cucumber-preprocessor
```
npm install cypress-cucumber-preprocessor --save-dev
```

## Step2: Base cypress.config.js file
```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
```
## Step 3: Add code in package.js under the devDependencies section
```
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinations": true,
    "stepDefinitions": "cypress/e2e/step-definitions/"
  }
```
## Step 4: Create "Test.feature" file under /e2e and paste below code
```
Feature: Feature Name

    @TagName
    Scenario: Scenario Name
        Given Home page is opened
```

## Step 5: Create "Test_StepDef.js" file under /e2e/step-definitions
```
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Home page is opened', function() {
    cy.visit("https://www.google.com/")
    cy.wait(7000)
})
```