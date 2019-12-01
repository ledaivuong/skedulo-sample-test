Feature: Shopping Amazon
    As a user
    I want to shopping on Amazon
    So that I can view, edit, checkout my deals

    Scenario: I view, edit, checkout my deals
        When I go to home page
        When I login by ME accout
        When I click on TodaysDealLink
        When I select "Discount - High to Low" as sort by value
        When I check on "Amazon Devices" department checkbox
        When I select view deal product at the "2" item

        Then I am on page "productDetails"

        When I add price of product as "priceProductOne" of context
        When I select the quantity "2"
        When I calculate price "priceProductOne" of "2" items and add to context as "calculatePriceProductOne"
        When I click on Add To Cart Button

        Then I should see cart count "2" item
        Then I should see price "calculatePriceProductOne"

        When I go to home page
        When I search product "AAA Batteries"
        When I select view deal product at the "1" item

        Then I am on page "productDetails"

        When I add price of product as "priceProductSecond" of context
        When I select the quantity "5"
        When I calculate price "priceProductSecond" of "5" items and add to context as "calculatePriceProductSecond"
        When I click on Add To Cart Button
        When I calculate total price of "calculatePriceProductOne,calculatePriceProductSecond" and add to context as "totalPriceOne"

        Then I should see cart count "7" item
        Then I should see price "totalPriceOne"

        When I go to view cart
        When I edit the quantity of the "1" product to "1"
        When I edit the quantity of the "2" product to "3"
        When I calculate price "priceProductSecond" of "3" items and add to context as "calculatePriceProductSecond"
        When I delete the "1" product
        When I calculate price "calculatePriceProductOne" of "0" items and add to context as "calculatePriceProductSecond"
        When I calculate total price of "calculatePriceProductSecond" and add to context as "totalPriceSecond"

        Then I should see cart count "3" item
        Then I should see price "totalPriceSecond"

        When I click on proceed to checkout

        Then I am on page "checkoutPage"







