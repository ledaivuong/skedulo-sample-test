import userData from '../data/userData'
import homePage from '../pageObjects/homePage'
import { Given, When, Then } from 'cucumber'

const buffEmail = new Buffer.from(userData.get('email').value, 'base64')
const buffPassword = new Buffer.from(userData.get('password').value, 'base64')

When(/^I login by accout \"(.*)\" \"(.*)\"$/, (email, password) => {
  homePage
    .clickOnSigninLink()
    .inputEmail(email)
    .clickContinueButton()
    .inputPassword(password)
    .clickSigninButton()
})

When(/^I login by ME accout$/, () => {
  homePage
    .clickOnSigninLink()
    .inputEmail(buffEmail.toString('ascii'))
    .clickContinueButton()
    .inputPassword(buffPassword.toString('ascii'))
    .clickSigninButton()
})

Then(/^I am on page \"(.*)\"$/, (pageName) => {
  homePage.iAmOnPage(pageName)
})

When(/^I select the \"(.*)\" deal$/, (nthValue) => {
  let dealSelector
  let dealElement
  if (homePage.iAmOnPage == 'dealPage') {
    dealSelector = `((//span[@class="a-list-item"])[${nthValue}]//a)[1]`
    dealElement = homePage.findElement(dealSelector)
    dealElement.click()
  } else {
    dealSelector = `((//span[@cel_widget_id="SEARCH_RESULTS-SEARCH_RESULTS"]//div)[${nthValue}]//a)[1]`
    dealElement = homePage.findElement(dealSelector)
    dealElement.click()
  }
})
