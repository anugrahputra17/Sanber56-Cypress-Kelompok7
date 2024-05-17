import loginPage from "../../support/page-objects/loginPage"

describe('Login using POM', () => {
  it('Success Login', () => {
    loginPage.visit()
    loginPage.fillEmail('nama_pengguna')
    loginPage.fillPassword('kata_sandi')
    loginPage.clickLoginButton()
  })
})