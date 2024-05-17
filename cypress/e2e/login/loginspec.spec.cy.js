import loginPage from "../../support/page-objects/loginPage"

describe('Login using POM', () => {
  it('Success Login', () => {
    loginPage.visit()
    cy.fixture('users.json').then((users) => {
      const datauser = users[0];
    loginPage.fillEmail(datauser.email)
    loginPage.fillPassword(datauser.password)
    loginPage.clickLoginButton()
    });
  })
})

