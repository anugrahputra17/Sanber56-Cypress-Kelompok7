class loginPage {

  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  }

  fillEmail(email) {
    cy.get('#email').type(email)
  }

  fillPassword(password) {
    cy.get('#pass').type(password)
  }

  clickLoginButton() {
    cy.get('#send2').click()
  }
}

export default new loginPage()