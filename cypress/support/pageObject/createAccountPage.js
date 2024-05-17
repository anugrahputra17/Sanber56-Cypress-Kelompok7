class createAccountPage {
    firstName = '#firstname'
    lastName = '#lastname'
    email = '#email_address'
    passWord = '#password'
    confirmPass = '#password-confirmation'
    createButton = '#form-validate > .actions-toolbar > div.primary > .action'
    passMeter = '#password-strength-meter'
    passError = '#password-error'
    passConfirmError = '#password-confirmation-error'
    firstNameError = '#firstname-error'
    lastNameError = '#lastname-error'
    emailError = '#email_address-error'

    inputFirstName(firstName){
        cy.get(this.firstName).clear().type(firstName)
    }
    inputLastName(lastName){
        cy.get(this.lastName).clear().type(lastName)
    }
    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }
    inputPass(pass){
        cy.get(this.passWord).clear().type(pass)
    }
    inputConfirmPass(confirmPass){
        cy.get(this.confirmPass).clear().type(confirmPass)
    }
    clickCreate(){
        cy.get(this.createButton).click()
    }
    verifyMissingFirstName(){
        cy.get(this.firstNameError).should('be.visible', 'contain.text', 'This is a required field.')
    }
    verifyMissingLastName(){
        cy.get(this.lastNameError).should('be.visible', 'contain.text', 'This is a required field.')
    }
    verifyMissingEmail(){
        cy.get(this.emailError).should('be.visible', 'contain.text', 'This is a required field.')
    }
    verifyMissingPass(){
        cy.get(this.passError).should('be.visible', 'contain.text', 'This is a required field.')
    }
    verifyMissingConfirmPass(){
        cy.get(this.passConfirmError).should('be.visible', 'contain.text', 'This is a required field.')
    }

}
export default new createAccountPage()