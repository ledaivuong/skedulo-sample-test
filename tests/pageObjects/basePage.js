
export default class BasePage {

  iGoToPage(pageUrl) {
    const expectUrl = `${baseUrl}${pageUrl}`
    this.open(expectUrl)
  }

  iAmOnPage(pageUrl) {
    if (browser.getUrl().includes(`${baseUrl}${pageUrl}`)) {
      return pageUrl;
    }
    throw new Error(`It's not ${baseUrl}${pageUrl}`)
  }

  open(path = '/') {
    browser.url(path)
  }

  waitForInputElement(selector) {
    const timeOutErrorMessage = `Can not find input element ${selector}`
    $(selector).waitForExist(
      shortTimeout,
      false,
      timeOutErrorMessage)
    $(selector).scrollIntoView()
    return $(selector)
  }

  waitForClickElement(selector) {
    const timeOutErrorMessage = `Can not click element ${selector}`
    $(selector).waitForClickable({
      timeout: shortTimeout,
      reverse: false,
      timeoutMsg: timeOutErrorMessage
    })
    $(selector).scrollIntoView()
    return $(selector)
  }

  waitForElementDisappear(selector) {
    const timeOutErrorMessage = `Element ${selector} still displayed`
    $(selector).waitForDisplayed(
      shortTimeout,
      true,
      timeOutErrorMessage
    )
  }

}
