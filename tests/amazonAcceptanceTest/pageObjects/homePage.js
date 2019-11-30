import BasePage from './basePage'

import todaysDealPage from './todaysDealPage'

class HomePage extends BasePage {
  get todaysDealLink () {
    // return this.findElement('//div[@id="nav-xshop"]/a[text()="Today\'s Deals"]');
    return this.findElement('//div[@id="nav-xshop"]/a[text()="Black Friday"]')
  }

  get signinLink () { return this.findElement('#nav-link-accountList') }

  get emailInput () { return this.findElement('#ap_email') }

  get continueButton () { return this.findElement('#continue') }

  get passwordInput () { return this.findElement('#ap_password') }

  get signinButton () { return this.findElement('#signInSubmit') }

  clickOnTodaysDealLink () {
    this.todaysDealLink.click()
    return todaysDealPage
  }

  clickOnSigninLink () {
    this.signinLink.click()
    return this
  }

  inputEmail (email) {
    this.emailInput.addValue(email)
    return this
  }

  clickContinueButton () {
    this.continueButton.click()
    return this
  }

  inputPassword (password) {
    this.passwordInput.addValue(password)
    return this
  }

  clickSigninButton () {
    this.signinButton.click()
    return this
  }
}
export default new HomePage()
