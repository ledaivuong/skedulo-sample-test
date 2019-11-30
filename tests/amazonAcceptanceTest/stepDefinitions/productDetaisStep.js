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
