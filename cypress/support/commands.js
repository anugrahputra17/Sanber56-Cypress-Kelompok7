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