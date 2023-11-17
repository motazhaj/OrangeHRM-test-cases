import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPageActions } from "../pageObjects/loginPage/actions";
import { RecruitmentActions } from "../pageObjects/recruitmentPage/actions";
import { RecruitmentAssertions } from "../pageObjects/recruitmentPage/assertions";

const loginPageActions = new LoginPageActions();
const recruitmentActions = new RecruitmentActions();
const recruitmentAssertions = new RecruitmentAssertions();

When("the user marks the interview as failed", () => {
  recruitmentActions.markInterviewFailedButton();
});

Then("the status should be failed interview", () => {
  recruitmentAssertions.statusInterviewFailed();
});

When("the user marks job offer as declined", () => {
  recruitmentActions.jobOfferDeclined();
});

Then("the status should be job offer declined", () => {
  recruitmentAssertions.statusJobOfferDeclined();
});

When("the user rejects the recruit", () => {
  recruitmentActions.rejectButton();
  recruitmentActions.saveButton();
});

Then("the recruit should be rejecred", () => {
  recruitmentAssertions.statusRejected();
});
