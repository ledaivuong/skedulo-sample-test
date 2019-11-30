const timeout = 30000

export class ElementHandler {
  static findElement (selector) {
    const timeOutErrorMessage = `Can not find element ${selector}`
    $(selector).waitForExist(
      timeout,
      false,
      timeOutErrorMessage
    )
    $(selector).scrollIntoView()
    return $(selector)
  }
}
