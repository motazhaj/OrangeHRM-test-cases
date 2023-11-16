export class RecruitmentAssertions {
  statusHired() {
    cy.get(
      "p.oxd-text.oxd-text--p.oxd-text--subtitle-2[data-v-7b563373]"
    ).should("contain", "Status: Hired");
  }
}
