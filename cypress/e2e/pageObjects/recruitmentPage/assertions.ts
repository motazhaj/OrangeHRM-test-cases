export class RecruitmentAssertions {
  statusApplicationInitiated() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Application Initiated");
  }

  statusShortlisted() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Shortlisted");
  }

  statusInterviewScheduled() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Interview Scheduled");
  }

  statusInterviewPassed() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Interview Passed");
  }

  statusInterviewFailed() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Interview Failed");
  }

  statusJobOffered() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Job Offered");
  }

  statusJobOfferDeclined() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Offer Declined");
  }

  statusRejected() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Rejected");
  }

  statusHired() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Hired");
  }
}
