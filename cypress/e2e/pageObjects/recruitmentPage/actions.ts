export class RecruitmentActions {
  openRecruitmentPage() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
    );
  }
  addButton() {
    cy.contains("button", "Add").click();
  }

  firstName(firstName: string) {
    cy.get('[name="firstName"]').type(firstName);
  }
  middleName(middleName: string) {
    cy.get('[name="middleName"]').type(middleName);
  }

  lastName(lastName: string) {
    cy.get('[name="lastName"]').type(lastName);
  }

  vacancy(vacancy: string) {
    cy.get("div[data-v-67d2aedf]").eq(0).click();
    cy.contains("Software Engineer").click();
  }

  email(email: string) {
    cy.get('input.oxd-input.oxd-input--active[placeholder="Type here"]')
      .eq(0)
      .type(email);
  }

  contactNumber(contactNumber: string) {
    cy.get('input.oxd-input.oxd-input--active[placeholder="Type here"]').type(
      contactNumber
    );
  }

  saveButton() {
    cy.contains("button", "Save").click();
  }

  shortlistButton() {
    cy.contains("button", "Shortlist").click();
  }

  scheduleInterviewButton() {
    cy.contains("button", "Schedule Interview").click();
  }

  interviewInfo() {
    cy.get("[data-v-1f99f73c]").eq(5).type("First Interview");
    cy.get("[data-v-75e744cd]").eq(0).type("a");
    cy.contains("Odis Adalwin").click();
    cy.get("[data-v-1f99f73c]").eq(6).type("2023-11-15");
    cy.get("[data-v-1f99f73c]").eq(7).type("01:00 AM");
  }

  markInterviewFailedButton() {
    cy.contains("button", "Mark Interview Failed").click();
  }

  markInterviewPassedButton() {
    cy.contains("button", "Mark Interview Passed").click();
  }

  offerJobButton() {
    cy.contains("button", "Offer Job").click();
  }

  jobOfferDeclined() {
    cy.contains("button", "Offer Job").click();
  }

  hireButton() {
    cy.contains("button", "Hire").click();
  }

  rejectButton() {
    cy.contains("button", "Reject").click();
  }
}
