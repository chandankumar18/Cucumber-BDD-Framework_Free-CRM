$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login test",
  "description": "",
  "id": "free-crm-login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login test functionality",
  "description": "",
  "id": "free-crm-login-test;free-crm-login-test-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is present on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"chandan4crm\" and \"chandan@crm\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_Defination.user_is_present_on_Login_Page()"
});
formatter.result({
  "duration": 31359568122,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 4170408860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandan4crm",
      "offset": 13
    },
    {
      "val": "chandan@crm",
      "offset": 31
    }
  ],
  "location": "Login_Step_Defination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 9499613132,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 16960725361,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 25307484,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.close_the_application_and_browser()"
});
formatter.result({
  "duration": 1679551997,
  "status": "passed"
});
});