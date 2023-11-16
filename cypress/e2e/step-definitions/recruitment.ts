import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPageActions } from "../pageObjects/loginPage/actions";
import { RecruitmentActions } from "../pageObjects/recruitmentPage/actions";
import { RecruitmentAssertions } from "../pageObjects/recruitmentPage/assertions";

const loginPageActions = new LoginPageActions();
const recruitmentActions = new RecruitmentActions();
const recruitmentAssertions = new RecruitmentAssertions();

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

When("the user shortlists the recruit", () => {
  recruitmentActions.shortlistButton();
  recruitmentActions.saveButton();
});

When("the user schedules an interview with the recruit", () => {
  recruitmentActions.scheduleInterviewButton();
  recruitmentActions.interviewInfo();
  recruitmentActions.saveButton();
});

When("the user marks the interview as passed", () => {
  recruitmentActions.markInterviewPassedButton();
  recruitmentActions.saveButton();
});

When("the user Offer's the recruit a job", () => {
  recruitmentActions.offerJobButton();
  recruitmentActions.saveButton();
});

When("the user hires the recruit", () => {
  recruitmentActions.hireButton();
  recruitmentActions.saveButton();
});

Then("the recruit should be hired", () => {
  recruitmentAssertions.statusHired();
});
