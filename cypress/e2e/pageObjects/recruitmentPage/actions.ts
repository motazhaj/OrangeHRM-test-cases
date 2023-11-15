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
    cy.contains("Senior QA Lead").click();
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
}
