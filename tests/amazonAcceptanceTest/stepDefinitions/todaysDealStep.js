import todaysDealPage from '../pageObjects/todaysDealPage'
import { Given, When, Then } from 'cucumber'

When(/^I select \"(.*)\" as sort by value$/, (sortTextValue) => {
  todaysDealPage.selectSortByValue(sortTextValue)
})

When(/^I check on \"(.*)\" department checkbox$/, (departmentValue) => {
  todaysDealPage.checkDepartment(departmentValue)
})

When(/^I select view deal product at the \"(.*)\" item$/, (nthValue) => {
  todaysDealPage.selectViewDealProduct(nthValue)
})
