import shoppingCartPage from '../pageObjects/shoppingCartPage'
import { Given, When, Then } from 'cucumber'

Then(/^I should see cart count \"(.*)\" item$/, (quantity) => {
  todaysDealPage.selectSortByValue(sortTextValue)
})
