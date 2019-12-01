import BasePage from './basePage'

class ShoppingCartPage extends BasePage {
  get cartCountIcon() { return this.findElement('#nav-cart-count') }

  get cartSubTotalItems() { return this.findElement('(//div[@id="hlb-subcart"]//span[contains(@class,"huc-subtotal")]/span)[1]') }

  get cartSubTotalItemCartView() { return this.findElement('#sc-subtotal-label-activecart') }

  get cartSubTotalPrice() { return this.findElement('(//div[@id="hlb-subcart"]//span[contains(@class,"huc-subtotal")]/span)[2]') }

  get cartSubTotalPriceCartView() { return this.findElement('#sc-subtotal-amount-activecart') }

  get proceedToCheckoutButton() { return this.findElement('#hlb-ptc-btn-native') }

  get proceedToCheckoutButtonCartView() { return this.findElement('//input[@name="proceedToCheckout"]') }

  selectQuantityOfProduct(nthProduct, quantity) {
    const quantitySelectSelectors = $$('//select[@name="quantity"]')
    console.log(quantitySelectSelectors.length)
    const particularQuantitySelect = (`(//select[@name="quantity"])[${quantitySelectSelectors.length - Number(nthProduct) + 1}]`)
    const quantitySelectElement = this.findElement(particularQuantitySelect)
    quantitySelectElement.selectByVisibleText(quantity)
  }

  deleteProduct(nthProduct) {
    const deleteLinks = $$('//input[@value="Delete"]')
    const particularDeleteLink = (`(//input[@value="Delete"])[${deleteLinks.length - Number(nthProduct) + 1}]`)
    const deleteLinkElement = this.findElement(particularDeleteLink)
    browser.waitUntil(() => deleteLinkElement.isClickable())
    deleteLinkElement.click()
    browser.waitUntil(() => !deleteLinkElement.isDisplayed())
  }

  clickProceedToCheckout() {
    this.proceedToCheckoutButtonCartView.click()
  }

  assertCartCountItems(quantity) {
    assert.include(
      this.cartSubTotalItems.getText(),
      quantity > 1 ? `(${quantity} items)` : '(1 item)'
    )
    assert.include(
      this.proceedToCheckoutButton.getText(),
      quantity > 1 ? `(${quantity} items)` : '(1 item)'
    )
  }

  assertCartCountItemCartView(quantity) {
    assert.include(
      this.cartSubTotalItemCartView.getText(),
      quantity > 1 ? `(${quantity} items)` : '(1 item)'
    )
  }

  assertPrice(price) {
    assert.include(
      this.cartSubTotalPrice.getText(),
      `${price.toString()}`
    )
  }

  assertPriceCartView(price) {
    assert.include(
      this.cartSubTotalPriceCartView.getText(),
      `${price.toString()}`
    )
  }
}
export default new ShoppingCartPage()
