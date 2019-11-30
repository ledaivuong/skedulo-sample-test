import homePage from '../pageObjects/homePage'
import { Given, When, Then } from 'cucumber'

Given(/^I go to home page$/, () => {
  homePage.open()
})

When(/^I click on TodaysDealLink$/, () => {
  homePage.clickOnTodaysDealLink()
})
