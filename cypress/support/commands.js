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

Cypress.Commands.add('verify',() => {
  cy.get('.message-error').should('contain.text','sign-in was incorrect')
})

Cypress.Commands.add('emptyemail',() => {
  cy.get('#email').clear()
cy.get('#pass').type('password')
cy.get('#send2').click()
cy.get('.message-error').should('contain.text','required')
})

Cypress.Commands.add('emptypassword',() => {
  cy.get('#email').type('test@gmail.com')
cy.get('#pass').clear()
cy.get('#send2').click()
cy.get('.mage-error, .message-error').should('contain.text','required')
})