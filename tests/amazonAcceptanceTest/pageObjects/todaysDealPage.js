import BasePage from './basePage'

class TodaysDealPage extends BasePage {
  get sortBySelect() { return this.findElement('//select[@name="sortOptions"]') }

  get amazonDevicesCheckbox() {
    return this.findElement('//span[contains(text(), "Amazon Devices") and contains(@class, "a-checkbox-label")]/preceding-sibling::input')
  }

  selectSortByValue(textValue) {
    this.sortBySelect.selectByVisibleText(textValue)
    this.waitForLoading()
    return this;
  }

  checkDepartment(departmentValue) {
    switch (departmentValue) {
      case 'Amazon Devices':
        this.amazonDevicesCheckbox.click()
        this.waitForLoading()
        return this
      default:
        throw new Error('Invalid parameter. Please check checkDepartment -> tests\amazonAcceptanceTest\pageObjects\todaysDealPage.js')
    }
  }

  selectViewDealProduct(nthValue) {
    // Amazon have many kind of product, this selector will lead to the product detail page
    const nthViewDealProductSelector = `(//span[@class="a-button-inner"]/a[contains(text(),"View Deal") and contains(@href, "dp")])[${nthValue}]`
    const nthViewDealProductElement = this.findElement(nthViewDealProductSelector)
    nthViewDealProductElement.click()
  }
}
export default new TodaysDealPage()
