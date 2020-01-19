Feature: Complete register
    As a user
    I want to go through the register journey
    So that I can input my info and address to complete profile

    Scenario: I input my information
        Given I go to page "sign-up"
        When I input "vuong" as first name
        When I input "le" as last name
        When I input "random" as email address
        When I select "March" as month of birth
        When I select "9" as day of birth
        When I select "2000" as year of birth
        When I select "Male" as gender
        When I input "English" as language
        When I click next button
        Then I am on page "address"
