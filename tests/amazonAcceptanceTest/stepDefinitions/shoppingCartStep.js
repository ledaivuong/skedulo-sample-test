import shoppingCartPage from '../pageObjects/shoppingCartPage'
import { Given, When, Then } from 'cucumber'

Then(/^I should see cart count \"(.*)\" item$/, (quantity) => {
  if (shoppingCartPage.iAmOnPage("shoppingCartPage")) { shoppingCartPage.assertCartCountItemCartView(quantity) }
  else { shoppingCartPage.assertCartCountItems(quantity); }
})

Then(/^I should see price \"(.*)\"$/, (price) => {
  if (shoppingCartPage.iAmOnPage("shoppingCartPage")) { shoppingCartPage.assertPriceCartView(context[price]) }
  else { shoppingCartPage.assertPrice(context[price]) }
});

When(/^I edit the quantity of the \"(.*)\" product to \"(.*)\"$/, (nthProduct, quantity) => {
  shoppingCartPage.selectQuantityOfProduct(nthProduct, quantity)
});

When(/^I delete the \"(.*)\" product$/, (nthProduct) => {
  shoppingCartPage.deleteProduct(nthProduct)
});

When(/^I click on proceed to checkout$/, () => {
  shoppingCartPage.clickProceedToCheckout()
});

