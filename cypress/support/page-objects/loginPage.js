class loginPage {

    visit() {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
}

fillEmail(email) {
  cy.get('#email').type(email)
}

fillPassword(password) {
  cy.get('#pass').type(password)
}

clickLoginButton() {
  cy.get('#send2').click()
}}

export default new loginPage()