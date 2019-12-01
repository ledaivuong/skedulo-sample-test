import userData from '../data/userData'
import homePage from '../pageObjects/homePage'
import searchDealsPage from '../pageObjects/searchDealsPage'
import todaysDealPage from '../pageObjects/todaysDealPage'
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

When(/^I go to view cart$/, () => {
  homePage.goToViewCartPage()
})

Then(/^I am on page \"(.*)\"$/, (pageName) => {
  assert.isNotFalse(homePage.iAmOnPage(pageName), `It's not ${pageName}`)
})

When(/^I search product \"(.*)\"$/, (keyword) => {
  homePage.findProductBySearch(keyword)
})

When(/^I select \"(.*)\" as sort by value$/, (sortTextValue) => {
  if (searchDealsPage.iAmOnPage("searchDealsPage")) {
    searchDealsPage.selectSortByValue(sortTextValue);
  } else { todaysDealPage.selectSortByValue(sortTextValue) }

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

When(/^I select view deal product at the \"(.*)\" item$/, (nthValue) => {
  if (searchDealsPage.iAmOnPage("searchDealsPage")) {
    searchDealsPage.selectViewDealProduct(nthValue);
  } else { todaysDealPage.selectViewDealProduct(nthValue) }

})
