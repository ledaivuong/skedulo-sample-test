import BasePage from './basePage'

class HomePage extends BasePage {

    get todaysDealLink { return this.findElement('//div[@id="nav-xshop"]/a[text()="Today\'s Deals"]');}
}