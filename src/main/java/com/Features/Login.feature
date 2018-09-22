Feature: Free CRM login test 

Scenario: Free CRM login test functionality

Given user is present on Login Page
When title of Login Page is Free CRM
Then user enters username and password
Then user clicks on Login button
Then user is on Home Page
Then close the application and browser