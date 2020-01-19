
import signupPage from '../pageObjects/signupPage'

import { Given, When, Then } from 'cucumber'
import { basename } from 'path'

When(/^I input \"(.*)\" as first name$/, (firstName) => {
    signupPage.inputFirstName(firstName)
})

When(/^I input \"(.*)\" as last name$/, (lastName) => {
    signupPage.inputLastName(lastName)
})

When(/^I input \"(.*)\" as email address$/, (emailAddress) => {
    signupPage.inputEmailAddress(emailAddress)
})

When(/^I select \"(.*)\" as month of birth$/, (monthValue) => {
    signupPage.selectMonth(monthValue)
})

When(/^I select \"(.*)\" as day of birth$/, (dayValue) => {
    signupPage.selectDay(dayValue)
})

When(/^I select \"(.*)\" as year of birth$/, (yearValue) => {
    signupPage.selectYear(yearValue)
})

When(/^I select \"(.*)\" as gender$/, (genderValue) => {
    signupPage.selectGender(genderValue)
})

When(/^I input \"(.*)\" as language$/, (language) => {
    signupPage.inputLanguages(language)
})

When(/^I click next button$/, () => {
    signupPage.clickOnNextButton()
})
