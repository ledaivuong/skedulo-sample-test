import { ElementHandler } from '../utils/elementHandler'

export default class BasePage {
  get imageLoading() { return this.findElement('//img[contains(@alt, "Loading...")]') }

  get barSearchTextBox() { return this.findElement('#twotabsearchtextbox') }

  get barSearchButton() { return this.findElement('//span[@id="nav-search-submit-text"]/following-sibling::input') }

  get cartViewButton() { return this.findElement('#nav-cart') }

  // This function is used to deal with many type of product on Amazon
  matchRuleShort(str, rule) {
    var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
    return new RegExp('^' + rule.split('*').map(escapeRegex).join('.*') + '$').test(str)
  }

  waitForLoading() {
    this.imageLoading.waitForDisplayed(
      30000,
      true,
      'Loading have not finished'
    )
  }

  findProductBySearch(keyword) {
    this.barSearchTextBox.clearValue()
    this.barSearchTextBox.addValue(keyword)
    this.barSearchButton.click()
  }

  goToViewCartPage() {
    this.cartViewButton.click()
    browser.waitUntil(() => this.iAmOnPage('shoppingCartPage'))
    browser.waitUntil(() => $('#sc-subtotal-amount-activecart').isDisplayed())
  }

  iAmOnPage(pageName) {
    switch (pageName) {
      case 'dealPage':
        if (browser.getUrl().includes(`${baseUrl}deal`)) {
          return pageName;
        }
        return false;
      case 'productDetails':
        if (this.matchRuleShort(browser.getUrl(), '*/dp/*')) {
          return pageName;
        }
        return false;
      case 'searchDealsPage':
        if (browser.getUrl().includes(`${baseUrl}s?k`)) {
          return pageName;
        }
        return false;
      case 'shoppingCartPage':
        if (browser.getUrl().includes(`${baseUrl}gp/cart/`)) {
          return pageName;
        }
        return false;
      case 'checkoutPage':
        if (browser.getUrl().includes(`${baseUrl}gp/buy/`)) {
          return pageName;
        }
        return false;
      default:
        throw new Error('Invalid parameter. Please check method iAmOnPage -> tests\amazonAcceptanceTest\pageObjects\basePage.js')
    }
  }

  open(path = '/') {
    browser.url(path)
  }

  findElement(selector) {
    return ElementHandler.findElement(selector)
  }
}
