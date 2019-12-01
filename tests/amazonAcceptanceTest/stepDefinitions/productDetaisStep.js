import productDetailsPage from '../pageObjects/productDetailsPage'
import { Given, When, Then } from 'cucumber'

When(/^I select the quantity \"(.*)\"$/, (quantity) => {
  productDetailsPage.selectQuantity(quantity)
})

When(/^I click on Add To Cart Button$/, () => {
  productDetailsPage.clickAddToCartButton()
})

When(/^I add price of product as \"(.*)\" of context$/, (nameOfProperty) => {
  productDetailsPage.addPriceToContext(nameOfProperty)
})

When(/^I calculate price \"(.*)\" of \"(.*)\" items and add to context as \"(.*)\"$/, (nameOfProperty, quantity, result) => {
  productDetailsPage.calculatePriceAndAddToContext(nameOfProperty, quantity, result)
})

When(/^I calculate total price of \"(.*)\" and add to context as \"(.*)\"$/, (arrayOfProperty, result) => {
  productDetailsPage.calculateTotalPriceAndAddToContext(arrayOfProperty, result)
})
