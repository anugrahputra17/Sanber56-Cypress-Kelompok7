import loginPage from '../support/page-objects/loginPage'
describe('editAccount spec', () => {
    beforeEach(() => {
        cy.visit('/customer/account/login')
        cy.fixture('users.json').then((users) => {
            const datauser = users[4]
            loginPage.fillEmail(datauser.email)
            loginPage.fillPassword(datauser.password)
            loginPage.clickLoginButton()
            cy.wait(500)
        })
    })
    //Negative Case 1 - Blank Edit Account Information
    it('editInformation failed', () => {
        cy.emptyFirstname()
        cy.emptyLastname()
        cy.changeEmailEmpty()
        cy.changePassEmpty()
    })
    //Positive Case 1 - Success Edit Account Information
    it('editInformation success', () => {
        cy.successName1()
        cy.successName2()
        cy.successEmail1()
        cy.successEmail2()
    })
    //Negative Case 2 - Blank Edit Address
    it('editAddress failed', () => {
        cy.emptyAll()
    })
    //Positive Case 2 - Success Edit Adress
    it('editAdrress success', () => {
        cy.successAdrress1()
        cy.successAdrress2()
    })
})