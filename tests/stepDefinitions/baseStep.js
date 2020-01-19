
import signupPage from '../pageObjects/signupPage'
import addressPage from '../pageObjects/addressPage'

import { Given, When, Then } from 'cucumber'
import { basename } from 'path'

Given(/^I go to page \"(.*)\"$/, (pageName) => {
  switch (pageName) {
    case 'sign-up':
      signupPage.iGoToPage(signupPage.pageUrl)
      break
    default:
      throw new Error('Invalid parameter. Please check  tests\stepDefinitoins\baseStep.js')
  }
})

Then(/^I am on page \"(.*)\"$/, (pageName) => {
  switch (pageName) {
    case 'sign-up':
      signupPage.iAmOnPage(signupPage.pageUrl)
      break
    case 'address':
      addressPage.iAmOnPage(addressPage.pageUrl)
      break;
    default:
      throw new Error('Invalid parameter. Please check  tests\stepDefinitoins\baseStep.js')
  }
})
