import BasePage from './basePage'

class SearchDealsPage extends BasePage {
  get sortBySelect () { return this.findElement('#s-result-sort-select') }

  selectSortByValue (textValue) {
    $this.sortBySelect.selectByVisibleText(textValue)
  }
}
export default new SearchDealsPage()
