// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('verifyAccountExists',() => {
  cy.get('.message-error').should('contain.text', "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
})

Cypress.Commands.add('verifyEmailInvalid',() => {
  cy.get('#email_address-error').should('contain.text', "Please enter a valid email address (Ex: johndoe@domain.com).")
})

Cypress.Commands.add('verifyConfirmPassMatch',() => {
  cy.get('#password-confirmation-error').should('contain.text', "Please enter the same value again.")
})

Cypress.Commands.add('verifyRegisterSuccess',() => {
  cy.get('.message-success > div').should('be.visible').and('contain.text', "Thank you for registering with Main Website Store.")
})

Cypress.Commands.add('verify',() => {
  cy.get('.message-error').should('contain.text','sign-in was incorrect')
})

Cypress.Commands.add('emptyemail',() => {
  cy.get('#email').clear()
cy.get('#pass').type('password')
cy.get('#send2').click()
cy.get('.mage-error, .message-error').should('contain.text','required')
})

Cypress.Commands.add('emptypassword',() => {
  cy.get('#email').type('test@gmail.com')
cy.get('#pass').clear()
cy.get('#send2').click()
cy.get('.mage-error, .message-error').should('contain.text','required')
})


Cypress.Commands.add('createAccount', () => {
  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@gmail.com"
    return email
  }

  let userEmail = randomEmail()

  cy.visit('/customer/account/create/')
  cy.get('#firstname').clear().type('Sanber')
  cy.get('#lastname').clear().type('QA56')
  cy.get('#email_address').clear().type(userEmail)
  cy.get('#password').type('sanberQA56')
  cy.get('#password-confirmation').type('sanberQA56')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.wait(1000)
  cy.verifyRegisterSuccess()
})

Cypress.Commands.add('loginSuccess', () => {
  cy.visit('customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  cy.get('#email').clear().type('testingg@gmail.com')
  cy.get('#pass').type('Testing123')
  cy.get('#send2').click()
})

Cypress.Commands.add('addToCart', () => {

  cy.visit('radiant-tee.html')
  cy.get('#option-label-size-143-item-167').should('be.visible').click()
  cy.get('#option-label-color-93-item-56').click()
  cy.get('#qty').clear().type('2')
  cy.get('#product-addtocart-button').click()
  cy.get('.message-success').should('be.visible')
})