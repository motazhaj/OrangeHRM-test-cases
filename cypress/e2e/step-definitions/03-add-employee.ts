import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Steps for TC 1

Given("the user is on the Add User page as an admin", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get('[name="username"]').type("Admin");
  cy.get('[name="password"]').type("admin123");
  cy.contains("button", "Login").click();
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
  );
  cy.contains("button", "Add").click();
});

When("the user selects Admin in the User Role input", () => {
  cy.get(
    "i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow[data-v-bddebfba][data-v-67d2aedf]"
  )
    .eq(0)
    .click();
  cy.get("div.oxd-select-option").eq(1).click();
});

When("the user selects Enabled in the Status Input", () => {
  cy.get(
    "i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow[data-v-bddebfba][data-v-67d2aedf]"
  )
    .eq(1)
    .click();
  cy.get("div.oxd-select-option").eq(1).click();
});

When("the user types valid Employee Name in the Employee Name input", () => {
  cy.get('input[placeholder="Type for hints..."]').type("a");
  cy.contains("Levi Ackerman").click();
});

When("the user types username {string} in the Username field", (username) => {
  cy.get('input.oxd-input.oxd-input--active[autocomplete="off"]')
    .eq(0)
    .type(username);
});

When("the user types password {string} in password", (passowrd) => {
  cy.get('input.oxd-input.oxd-input--active[autocomplete="off"]')
    .eq(0)
    .type(passowrd);
});

When("the user types password {string} in confim password", (passowrd) => {
  cy.get('input.oxd-input.oxd-input--active[autocomplete="off"]')
    .eq(1)
    .type(passowrd);
});

When("the user click on the Save Button", () => {
  cy.contains("button", "Save").click();
});

Then("an added succesfully message appears", () => {
  cy.contains("Success").should("exist");
});

Then("the user is redirected to the admin managmenet page", () => {
  cy.url().should("contain", "admin/viewSystemUsers");
});

//Steps for TC 2

When("the user clicks on the Cancel Button", () => {
  cy.contains("button", "Cancel").click();
});
