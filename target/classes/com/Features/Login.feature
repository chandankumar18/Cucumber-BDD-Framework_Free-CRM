Feature: Free CRM login test 

# Without using Examples keyword
#Scenario: Free CRM login test functionality

#Given user is present on Login Page
#When title of Login Page is Free CRM
#Then user enters "chandan4crm" and "chandan@crm"
#Then user clicks on Login button
#Then user is on Home Page
#Then close the application and browser



# With using Examples keyword
Scenario Outline: Free CRM login test functionality

Given user is present on Login Page
When title of Login Page is Free CRM
Then user enters credentials "<userName>" and "<password>"
Then user clicks on Login button
Then user is on Home Page
Then close the application and browser

Examples:
			|userName         | password     |
			|chandan4crm      | chandan@crm  |
			|seleniumcucumber | selenium@456 |