import BasePage from './basePage'

class ShoppingCartPage extends BasePage {
  get cartCountIcon () { return this.findElement('#nav-cart-count') }

  get cartSubTotalItems () { return this.findElement('(//div[@id="hlb-subcart"]//span[contains(@class,"huc-subtotal")]/span)[1]') }

  get cartSubTotalPrice () { return this.findElement('(//div[@id="hlb-subcart"]//span[contains(@class,"huc-subtotal")]/span)[2]') }

  get proceedToCheckoutButton () { return this.findElement('#hlb-ptc-btn-native') }

  selectSortByValue (textValue) {
    $this.sortBySelect.selectByVisibleText(textValue)
  }

  assertCartCountItems (quantity) {
    assert.include(
      this.cartSubTotalItems.getText(),
      quantity > 1 ? `(${quantity} items)` : '(1 item)'
    )
    assert.include(
      this.proceedToCheckoutButton.getText(),
      quantity > 1 ? `(${quantity} items)` : '(1 item)'
    )
    assert.include(
      this.cartSubTotalItems.getText(),
            `${quantity}`
    )
  }
}
export default new ShoppingCartPage()
