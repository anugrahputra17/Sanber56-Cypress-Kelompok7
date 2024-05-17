import createAccountPage from '../support/pageObject/createAccountPage';

describe('createAccount spec', () => {

    function randomEmail(){
        const randomString = Math.random().toString(36).substring(2,10)
        const email = randomString + "@gmail.com"
        return email
    }
    
    let userEmail = randomEmail()


    beforeEach(() => {
        cy.visit('/customer/account/create/')
    })

    // Case 1 - Gagal create akun karena field dikosongkan
    it('Create Account Failed - missing value in required field', () => {
        createAccountPage.inputFirstName(' ')
        createAccountPage.inputLastName(' ')
        createAccountPage.inputEmail(' ')
        createAccountPage.inputPass(' ')
        createAccountPage.inputConfirmPass(' ')
        createAccountPage.clickCreate()
        createAccountPage.verifyMissingFirstName()
        createAccountPage.verifyMissingLastName()
        createAccountPage.verifyMissingEmail()
        createAccountPage.verifyMissingPass()
        createAccountPage.verifyMissingConfirmPass()
    })


    // Case 2 - Gagal create akun karena akun sudah terdaftar
    it('Create Account Failed - account already exists', () => {
        cy.fixture('dataUserCreate.json').then((users) => {
            const userdata = users[0]
            createAccountPage.inputFirstName(userdata.firstName)
            createAccountPage.inputLastName(userdata.lastName)
            createAccountPage.inputEmail(userdata.email)
            createAccountPage.inputPass(userdata.pass)
            createAccountPage.inputConfirmPass(userdata.confirmPass)
            createAccountPage.clickCreate()
            cy.wait(100)
            cy.get('.message-error').should('contain.text', "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
        })
    })


    // Case 3 - Gagal create akun karena email invalid
    it('Create Account Failed - invalid email', () => {
        cy.fixture('dataUserCreate.json').then((users) => {
            const userdata = users[1]
            createAccountPage.inputFirstName(userdata.firstName)
            createAccountPage.inputLastName(userdata.lastName)
            createAccountPage.inputEmail(userdata.email)
            createAccountPage.inputPass(userdata.pass)
            createAccountPage.inputConfirmPass(userdata.confirmPass)
            createAccountPage.clickCreate()
            // cy.wait(100)
            cy.get(createAccountPage.emailError).should('contain.text', "Please enter a valid email address (Ex: johndoe@domain.com).")
        })
    })


    // Case 4 - Gagal create akun karena password dan confirmation password tidak match
    it('Create Account Failed - confirmation pass not match', () => {
        cy.fixture('passValidation.json').then((psw) => {
            const passData = psw.validation[1]
            createAccountPage.inputFirstName('Sanber')
            createAccountPage.inputLastName('QA56')
            createAccountPage.inputEmail(userEmail)
            createAccountPage.inputPass(passData.passw)
            createAccountPage.inputConfirmPass(passData.confirmPass)
            createAccountPage.clickCreate()
            cy.get(createAccountPage.passConfirmError).should('contain.text', "Please enter the same value again.")
        })
    })


    // Case 5 - validasi password strength
    it('Password check', () => {
        cy.fixture('passValidation.json').then((psw) => {
            const passData = psw[0]
            psw.passMeterCheck.forEach((passData) => {
                createAccountPage.inputPass(passData.passw + " ")
                createAccountPage.inputConfirmPass(' ')
                createAccountPage.clickCreate()             
                cy.wait(1000)
                cy.get('#password-strength-meter-label').should("contain.text", passData.passlabel)
                cy.get(createAccountPage.passError).should("contain.text", passData.err)
                cy.clearLocalStorage();
                cy.clearCookies();
            });
        })
    })


    // Case 6 - Create akun berhasil
    it('Create Account Success', () => {
        cy.fixture('passValidation.json').then((psw) => {
            const passData = psw.validation[0]
            createAccountPage.inputFirstName('Sanber')
            createAccountPage.inputLastName('QA56')
            createAccountPage.inputEmail(userEmail)
            createAccountPage.inputPass(passData.passw)
            createAccountPage.inputConfirmPass(passData.confirmPass)
            createAccountPage.clickCreate()
            cy.get('.message-success > div').should('be.visible').and('contain.text', "Thank you for registering with Main Website Store.")
        })
    })





    
})