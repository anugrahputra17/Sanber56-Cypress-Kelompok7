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

Cypress.Commands.add('verifyAccountExists', () => {
  cy.get('.message-error').should('contain.text', "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
})

Cypress.Commands.add('verifyEmailInvalid', () => {
  cy.get('#email_address-error').should('contain.text', "Please enter a valid email address (Ex: johndoe@domain.com).")
})

Cypress.Commands.add('verifyConfirmPassMatch', () => {
  cy.get('#password-confirmation-error').should('contain.text', "Please enter the same value again.")
})

Cypress.Commands.add('verifyRegisterSuccess', () => {
  cy.get('.message-success > div').should('be.visible').and('contain.text', "Thank you for registering with Main Website Store.")
})

Cypress.Commands.add('verify', () => {
  cy.get('.message-error').should('contain.text', 'sign-in was incorrect')
})

Cypress.Commands.add('emptyemail', () => {
  cy.get('#email').clear()
  cy.get('#pass').type('password')
  cy.get('#send2').click()
  cy.get('.mage-error, .message-error').should('contain.text', 'required')
})

Cypress.Commands.add('emptypassword', () => {
  cy.get('#email').type('test@gmail.com')
  cy.get('#pass').clear()
  cy.get('#send2').click()
  cy.get('.mage-error, .message-error').should('contain.text', 'required')
})

Cypress.Commands.add('emptyFirstname', () => {
  cy.visit('/customer/account/edit')
  cy.get('#firstname').clear()
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.get('#firstname-error').should('contain.text', 'This is a required field.')
})
Cypress.Commands.add('emptyLastname', () => {
  cy.visit('/customer/account/edit')
  cy.get('#lastname').clear()
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.get('#lastname-error').should('contain.text', 'This is a required field.')
})
Cypress.Commands.add('changeEmailEmpty', () => {
  cy.visit('/customer/account/edit')
  cy.get('#change-email').check()
  cy.wait(500)
  cy.get('#change-password').uncheck()
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.get('#current-password-error').should('contain.text', 'This is a required field.')
})
Cypress.Commands.add('changePassEmpty', () => {
  cy.visit('/customer/account/edit')
  cy.get('#change-email').uncheck()
  cy.get('#change-password').check()
  cy.wait(500)
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.get('#current-password-error').should('contain.text', 'This is a required field.')
  cy.get('#password-error').should('contain.text', 'This is a required field.')
  cy.get('#password-confirmation-error').should('contain.text', 'This is a required field.')
})
Cypress.Commands.add('successName1', () => {
  cy.visit('/customer/account/edit')
  cy.get('#firstname').clear()
  cy.get('#lastname').clear()
  cy.get('#firstname').type('Marc')
  cy.get('#lastname').type('Marquez')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.wait(500)
  cy.get('.message-success > div').should('be.visible')
  cy.get('.box-content > p').should('contain.text', 'Marc Marquez')
})
Cypress.Commands.add('successName2', () => {
  cy.visit('/customer/account/edit')
  cy.get('#firstname').clear()
  cy.get('#lastname').clear()
  cy.get('#firstname').type('Abdul')
  cy.get('#lastname').type('Ghofur')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.wait(500)
  cy.get('.message-success > div').should('be.visible')
  cy.get('.box-content > p').should('contain.text', 'Abdul Ghofur')
})
Cypress.Commands.add('successEmail1', () => {
  cy.visit('/customer/account/edit')
  cy.get('#change-email').check()
  cy.wait(500)
  cy.get('#change-password').uncheck()
  cy.get('#email').clear()
  cy.get('#email').type('marcmarquez@gmailtest.com')
  cy.get('#current-password').type('@Bdul1234')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.wait(500)
  cy.get('.message-success > div').should('be.visible')
  cy.get('#email').type('marcmarquez@gmailtest.com')
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@Bdul1234')
  cy.get('#send2').click()
  cy.wait(500)
  cy.get('.box-content > p').should('contain.text', 'marcmarquez@gmailtest.com')
})
Cypress.Commands.add('successEmail2', () => {
  cy.visit('/customer/account/edit')
  cy.get('#change-email').check()
  cy.wait(500)
  cy.get('#change-password').uncheck()
  cy.get('#email').clear()
  cy.get('#email').type('abdulghofur@gmailtest.com')
  cy.get('#current-password').type('@Bdul1234')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.wait(500)
  cy.get('.message-success > div').should('be.visible')
  cy.get('#email').type('abdulghofur@gmailtest.com')
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@Bdul1234')
  cy.get('#send2').click()
  cy.wait(500)
  cy.get('.box-content > p').should('contain.text', 'abdulghofur@gmailtest.com')
})
Cypress.Commands.add('emptyAll', () => {
  cy.visit('/customer/address/edit/id/888/')
  cy.get('#company').clear()
  cy.get('#telephone').clear()
  cy.get('#street_1').clear()
  cy.get('#street_2').clear()
  cy.get('#street_3').clear()
  cy.get('#city').clear()
  cy.get('#region').clear()
  cy.get('#zip').clear()
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.get('#telephone-error').should('contain.text', 'This is a required field.')
  cy.get('#street_1-error').should('contain.text', 'This is a required field.')
  cy.get('#city-error').should('contain.text', 'This is a required field.')

})
Cypress.Commands.add('successAdrress1', () => {
  cy.visit('/customer/address/edit/id/888/')
  cy.get('#company').clear()
  cy.get('#telephone').clear()
  cy.get('#street_1').clear()
  cy.get('#street_2').clear()
  cy.get('#street_3').clear()
  cy.get('#city').clear()
  cy.get('#region').clear()
  cy.get('#zip').clear()
  cy.get('#company').type('PT Jaya')
  cy.get('#telephone').type('021001002')
  cy.get('#street_1').type('Jl Anggrek XYZ')
  cy.get('#city').type('Bantul')
  cy.get('#region').type('DIY')
  cy.get('#zip').type('55888')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.wait(500)
  cy.get('.message-success > div').should('be.visible')
  cy.get('.box-address-billing > .box-content > address').should('contain.text', 'PT Jaya\nJl Anggrek XYZ\nBantul, DIY, 55888\nIndonesia')
  cy.get('.box-address-billing > .box-content > address > a').should('contain.text', '021001002')
})
Cypress.Commands.add('successAdrress2', () => {
  cy.visit('/customer/address/edit/id/888/')
  cy.get('#company').clear()
  cy.get('#telephone').clear()
  cy.get('#street_1').clear()
  cy.get('#street_2').clear()
  cy.get('#street_3').clear()
  cy.get('#city').clear()
  cy.get('#region').clear()
  cy.get('#zip').clear()
  cy.get('#company').type('PT Kenari')
  cy.get('#telephone').type('0855667788')
  cy.get('#street_1').type('Jl Pasar')
  cy.get('#city').type('Cirebon')
  cy.get('#region').type('Jawa Barat')
  cy.get('#zip').type('66111')
  cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  cy.wait(500)
  cy.get('.message-success > div').should('be.visible')
  cy.get('.box-address-billing > .box-content > address').should('contain.text', 'PT Kenari\nJl Pasar\nCirebon, Jawa Barat, 66111\nIndonesia')
  cy.get('.box-address-billing > .box-content > address > a').should('contain.text', '0855667788')
})


Cypress.Commands.add('createAccount', () => {
  function randomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10)
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