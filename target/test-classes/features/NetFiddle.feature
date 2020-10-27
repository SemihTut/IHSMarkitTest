
@test
Feature: User should be able to test net fiddle functionalities

    Background:
        Given the user is on the main page

    @test1
    Scenario: the user should navigate main page and click run button
        When the user click run button
        Then message should	be	displayed “Hello World”

    @test2
    Scenario: the user should click share button
        When the user should click share button
        Then message link starts with message link