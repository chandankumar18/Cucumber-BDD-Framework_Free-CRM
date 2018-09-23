Feature: Free CRM create contacts test

Scenario Outline: Free CRM new contacs functionality test

Given user is present on Login Page
When title of Login Page is Free CRM
Then user enters credentials "<userName>" and "<password>"
Then user clicks on Login button
Then user is on Home Page
Then user moves to new contacts page
And user enters contacts details "<firstName>", "<lastName>" and "<CompanyName>"
And verify that users details successfully added
Then close the application and browser

Examples:
			|userName         | password     | firstName | lastName | CompanyName         |
			|chandan4crm      | chandan@crm  | Sam       | Desouza  | L&T                 |
			|chandan4crm      | chandan@crm  | Rohan     | Sinha    | Microsoft   	      |
			|seleniumcucumber | selenium@456 | Sohan     | Dev      | IBM India Pvt. Ltd. |