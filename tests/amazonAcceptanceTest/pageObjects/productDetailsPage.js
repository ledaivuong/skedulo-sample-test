import BasePage from './basePage'

class ProductDetailsPage extends BasePage {
  get priceBlock() { return this.findElement('#priceblock_dealprice') }

  get quatitySelect() { return this.findElement('#quantity') }

  get addToCartButton() { return this.findElement('#add-to-cart-button') }

  selectQuantity(quantityValue) {
    this.quatitySelect.selectByVisibleText(quantityValue)
    return this
  }

  clickAddToCartButton() {
    this.addToCartButton.click()
  }

  addPriceToContext(nameOfProperty) {
    const priceText = this.priceBlock.getText()
    const price = priceText.substring(1, priceText.length)
    context[nameOfProperty] = price
  }

  calculatePriceAndAddToContext(nameOfProperty, quantity, result) {
    context[result] = context[nameOfProperty] * quantity;
  }

  calculateTotalPriceAndAddToContext(arrayOfProperty, result) {
    context[result] = 0
    let convertArray = arrayOfProperty.split(',');
    convertArray.forEach(element => {
      context[result] += Number(context[element])
    });
  }
}
export default new ProductDetailsPage()
