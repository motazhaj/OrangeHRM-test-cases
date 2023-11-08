import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Home page is opened", function () {
  cy.visit("https://www.google.com/");
  cy.wait(7000);
});
