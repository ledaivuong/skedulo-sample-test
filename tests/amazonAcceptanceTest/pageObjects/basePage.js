import { ElementHandler } from '../utils/elementHandler'

export default class BasePage {
  get imageLoading () { return this.findElement('//img[contains(@alt, "Loading...")]') }

  get barSearchTextBox () { return this.findElement('#twotabsearchtextbox') }

  get barSearchButton () { return this.findElement('//span[@id="nav-search-submit-text"]/following-sibling::input') }

  // This function is used to deal with many type of product on Amazon
  matchRuleShort (str, rule) {
    var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
    return new RegExp('^' + rule.split('*').map(escapeRegex).join('.*') + '$').test(str)
  }

  waitForLoading () {
    this.imageLoading.waitForDisplayed(
      30000,
      true,
      'Loading have not finished'
    )
  }

  findProductBySearch (keyword) {
    this.barSearchTextBox.clearValue()
    this.barSearchTextBox.addValue(keyword)
    this.barSearchButton.click()
  }

  iAmOnPage (pageName) {
    switch (pageName) {
      case 'dealPage':
        assert.include(
          browser.getUrl(),
          `${baseUrl}deal`,
          'It\'s not Deal Page or this product have another type which I have not cover')
        return pageName
      case 'productDetails':
        assert.isTrue(
          this.matchRuleShort(browser.getUrl(), '*/dp/*'),
          'It\'s not Product Details Page or this product have another type which I have not cover'
        )
        return pageName
      default:
        throw new Error('Invalid parameter. Please check method iAmOnPage -> tests\amazonAcceptanceTest\pageObjects\basePage.js')
    }
  }

  open (path = '/') {
    browser.url(path)
  }

  findElement (selector) {
    return ElementHandler.findElement(selector)
  }
}
