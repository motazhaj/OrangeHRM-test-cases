import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPageActions } from "../pageObjects/loginPage/actions";
import { RecruitmentActions } from "../pageObjects/recruitmentPage/actions";

const loginPageActions = new LoginPageActions();
const recruitmentActions = new RecruitmentActions();

Given("the user is on the recruitment page", () => {
  loginPageActions.openLoginPage();
  loginPageActions.username("Admin");
  loginPageActions.password("admin123");
  loginPageActions.loginButton();
  recruitmentActions.openRecruitmentPage();
});

When("the user adds a new recruit", () => {
  recruitmentActions.addButton();
  recruitmentActions.firstName("Motaz");
  recruitmentActions.middleName("Mahmoud");
  recruitmentActions.lastName("Haj Mohammad");
  recruitmentActions.vacancy("Software Engineer");
  recruitmentActions.email("motaz@test.com");
  recruitmentActions.contactNumber("0599123456");
  recruitmentActions.saveButton();
});
