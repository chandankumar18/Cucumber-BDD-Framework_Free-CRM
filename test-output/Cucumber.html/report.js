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
  "name": "user enters username and password",
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
  "duration": 45591735568,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 21122356,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 830606633,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 11124332532,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 35535961,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO123]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.Step_Definations.Login_Step_Defination.user_is_on_Home_Page(Login_Step_Defination.java:49)\r\n\tat ✽.Then user is on Home Page(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_Step_Defination.close_the_application_and_browser()"
});
formatter.result({
  "status": "skipped"
});
});