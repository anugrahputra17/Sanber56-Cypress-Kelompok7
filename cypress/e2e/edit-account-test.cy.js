describe('Edit Account', () => {
    it('My Account > Edit Account Information & Edit Address', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/')
        cy.get('#email').type('abdulghofur@gmailtest.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@Bdul1234')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').clear('')
        cy.get('#lastname').clear('')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#firstname-error').should('contain.text', 'This is a required field.')
        cy.get('#lastname-error').should('contain.text', 'This is a required field.')
    })
})