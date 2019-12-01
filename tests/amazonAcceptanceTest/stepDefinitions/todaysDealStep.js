import todaysDealPage from '../pageObjects/todaysDealPage'

import { Given, When, Then } from 'cucumber'

When(/^I check on \"(.*)\" department checkbox$/, (departmentValue) => {
  todaysDealPage.checkDepartment(departmentValue)
})

