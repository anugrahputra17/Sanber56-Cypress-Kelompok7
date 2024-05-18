import loginPage from "../support/page-objects/loginPage"

describe('Login using POM', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
})
  it('failed login - invalid email', () => {
    cy.fixture('users.json').then((users) => {
      const datauser = users[2];
    loginPage.fillEmail(datauser.email)
    loginPage.fillPassword(datauser.password)
    loginPage.clickLoginButton()
  });
});
it('failed login - wrong email', () => {
  cy.fixture('users.json').then((users) => {
    const datauser = users[3];
    loginPage.fillEmail(datauser.email)
    loginPage.fillPassword(datauser.password)
    loginPage.clickLoginButton()
    cy.verify()
});
});
it('failed login - wrong password', () => {
  cy.fixture('users.json').then((users) => {
    const datauser = users[1];
    loginPage.fillEmail(datauser.email)
    loginPage.fillPassword(datauser.password)
    loginPage.clickLoginButton()
    cy.verify()
});
});

it.only('failed login - empty email', () => {
  cy.emptyemail()
});

it.only('failed login - empty password', () => {
  cy.emptypassword()
});
it('Success Login', () => {
    cy.fixture('users.json').then((users) => {
      const datauser = users[0];
    loginPage.fillEmail(datauser.email)
    loginPage.fillPassword(datauser.password)
    loginPage.clickLoginButton()
    cy.get('#ui-id-3').should('contain.text','New')
    });
})

})
