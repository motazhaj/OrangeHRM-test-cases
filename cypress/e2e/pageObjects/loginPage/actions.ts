export class LoginPageActions {
  openLoginPage() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
  }

  username(username: string) {
    cy.get('[name="username"]').type(username);
  }

  password(password: string) {
    cy.get('[name="password"]').type(password);
  }

  loginButton() {
    cy.contains("button", "Login").click();
  }
}
