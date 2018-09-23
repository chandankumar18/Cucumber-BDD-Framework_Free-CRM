Feature: Free CRM Deals test functionality

Scenario: Free CRM new deals functionality test

Given user is present on Login Page
When title of Login Page is Free CRM
Then user enters credentials userName and password
| chandan4crm | chandan@crm |
Then user clicks on Login button
Then user is on Home Page
Then user moves to new deals page
And user enters deals details
| Deal_Test | 550 | 65 | 23 | This is for test automation |
And verify that deals details successfully added
Then close the application and browser