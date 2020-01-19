
import BasePage from './basePage'

class SignupPage extends BasePage {

  get pageUrl() { return "signup/personal" }

  get firstNameInput() { return this.waitForInputElement('#firstName') }

  get lastNameInput() { return this.waitForInputElement('#lastName') }

  get emailAddressInput() { return this.waitForInputElement('#email') }

  get monthSelect() {
    return {
      field: '.ui-select-match[placeholder="Month"] i.caret.pull-right',
      dropdownList: '#ui-select-choices-0',
      value: '//li[@id="ui-select-choices-0"]//div[text()="/VALUE/"]'
    }
  }

  get daySelect() {
    return {
      field: '.ui-select-match[placeholder="Day"] i.caret.pull-right',
      dropdownList: '#ui-select-choices-1',
      value: '//li[@id="ui-select-choices-1"]//div[text()="/VALUE/"]'
    }
  }

  get yearSelect() {
    return {
      field: '.ui-select-match[placeholder="Year"] i.caret.pull-right',
      dropdownList: '#ui-select-choices-2',
      value: '//li[@id="ui-select-choices-2"]//div[text()="/VALUE/"]'
    }
  }

  get genderSelect() {
    return {
      field: '.ui-select-match[placeholder="Select a gender"] i.caret.pull-right',
      dropdownList: '#ui-select-choices-3',
      value: '//li[@id="ui-select-choices-3"]//div[text()="/VALUE/"]'
    }
  }

  get languagesInput() {
    return this.waitForInputElement('span[placeholder="Add languages"] + input')
  }

  get nextButton() {
    return this.waitForClickElement('a[role="button"]')
  }

  inputFirstName(value) {
    this.firstNameInput.clearValue()
    this.firstNameInput.addValue(value)
    return this
  }

  inputLastName(value) {
    this.lastNameInput.clearValue()
    this.lastNameInput.addValue(value)
    return this
  }

  inputEmailAddress(value) {
    if (value === 'random') {
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const randomEmail = `${randomString}@gmail.com`
      this.emailAddressInput.clearValue()
      this.emailAddressInput.addValue(randomEmail)
      return this
    } else {
      this.emailAddressInput.clearValue()
      this.emailAddressInput.addValue(value)
      return this
    }
  }

  selectMonth(value) {
    this.waitForClickElement(this.monthSelect.field).click()
    $(this.monthSelect.dropdownList).waitForDisplayed
    const monthValueExpected = this.monthSelect.value.replace('/VALUE/', value)
    this.waitForClickElement(monthValueExpected).click()
    this.waitForElementDisappear(this.monthSelect.dropdownList)
    return this
  }

  selectDay(value) {
    this.waitForClickElement(this.daySelect.field).click()
    $(this.daySelect.dropdownList).waitForDisplayed
    const dayValueExpected = this.daySelect.value.replace('/VALUE/', value)
    this.waitForClickElement(dayValueExpected).click()
    this.waitForElementDisappear(this.daySelect.dropdownList)
    return this
  }

  selectYear(value) {
    this.waitForClickElement(this.yearSelect.field).click()
    $(this.yearSelect.dropdownList).waitForDisplayed
    const yearValueExpected = this.yearSelect.value.replace('/VALUE/', value)
    this.waitForClickElement(yearValueExpected).click()
    this.waitForElementDisappear(this.yearSelect.dropdownList)
    return this
  }

  selectGender(value) {
    this.waitForClickElement(this.genderSelect.field).click()
    $(this.genderSelect.dropdownList).waitForDisplayed
    const genderValueExpected = this.genderSelect.value.replace('/VALUE/', value)
    this.waitForClickElement(genderValueExpected).click()
    this.waitForElementDisappear(this.genderSelect.dropdownList)
    return this
  }

  inputLanguages(vaue) {
    this.languagesInput.clearValue()
    this.languagesInput.addValue()
    return this
  }

  clickOnNextButton() {
    this.nextButton.click()
  }
}

export default new SignupPage()

