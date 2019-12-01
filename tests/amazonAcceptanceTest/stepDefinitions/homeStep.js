import homePage from '../pageObjects/homePage'
import { Given, When, Then } from 'cucumber'

When(/^I go to home page$/, () => {
  homePage.open()
})

When(/^I click on TodaysDealLink$/, () => {
  homePage.clickOnTodaysDealLink()
})
