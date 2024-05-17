describe('Create-Account-Test', () => {
    it('Create an Account', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname').type('Abdul')
        cy.get('#lastname').type('Ghofur')
        cy.get('#email_address').type('abdulghofur@gmailtest.com')
        cy.get('#password').type('@Bdul1234')
        cy.get('#password-confirmation').type('@Bdul1234')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-error > div').should('contain.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
        //cy.get('.message-success > div').should('contain.text','Thank you for registering with Main Website Store.')
    })
})