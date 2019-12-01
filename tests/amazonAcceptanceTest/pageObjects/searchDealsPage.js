import BasePage from './basePage'

class SearchDealsPage extends BasePage {
  get sortBySelect() { return this.findElement('#s-result-sort-select') }

  selectSortByValue(textValue) {
    this.sortBySelect.selectByVisibleText(textValue)
    this.waitForLoading()
  }

  selectViewDealProduct(nthValue) {
    const nthViewDealProductSelector = `(//a[@class="a-link-normal"]/div/img)[${nthValue}]`
    const nthViewDealProductElement = this.findElement(nthViewDealProductSelector)
    nthViewDealProductElement.click()
  }
}
export default new SearchDealsPage()
