$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login test",
  "description": "",
  "id": "free-crm-login-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# Without using Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM login test functionality"
    },
    {
      "line": 6,
      "value": "#Given user is present on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of Login Page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"chandan4crm\" and \"chandan@crm\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on Login button"
    },
    {
      "line": 10,
      "value": "#Then user is on Home Page"
    },
    {
      "line": 11,
      "value": "#Then close the application and browser"
    },
    {
      "line": 15,
      "value": "# With using Examples keyword"
    }
  ],
  "line": 16,
  "name": "Free CRM login test functionality",
  "description": "",
  "id": "free-crm-login-test;free-crm-login-test-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is present on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "free-crm-login-test;free-crm-login-test-functionality;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 26,
      "id": "free-crm-login-test;free-crm-login-test-functionality;;1"
    },
    {
      "cells": [
        "chandan4crm",
        "chandan@crm"
      ],
      "line": 27,
      "id": "free-crm-login-test;free-crm-login-test-functionality;;2"
    },
    {
      "cells": [
        "seleniumcucumber",
        "selenium@456"
      ],
      "line": 28,
      "id": "free-crm-login-test;free-crm-login-test-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM login test functionality",
  "description": "",
  "id": "free-crm-login-test;free-crm-login-test-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is present on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"chandan4crm\" and \"chandan@crm\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_Defination.user_is_present_on_Login_Page()"
});
formatter.result({
  "duration": 74138224992,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 1230981470,
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
  "duration": 2831780065,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 24781259746,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 21497534,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.close_the_application_and_browser()"
});
formatter.result({
  "duration": 1419543182,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Free CRM login test functionality",
  "description": "",
  "id": "free-crm-login-test;free-crm-login-test-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is present on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"seleniumcucumber\" and \"selenium@456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_Defination.user_is_present_on_Login_Page()"
});
formatter.result({
  "duration": 17537506222,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 112953430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seleniumcucumber",
      "offset": 13
    },
    {
      "val": "selenium@456",
      "offset": 36
    }
  ],
  "location": "Login_Step_Defination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 948134624,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2620125452,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 101117042,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.Step_Definations.Login_Step_Defination.user_is_on_Home_Page(Login_Step_Defination.java:56)\r\n\tat ✽.Then user is on Home Page(Login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_Step_Defination.close_the_application_and_browser()"
});
formatter.result({
  "status": "skipped"
});
});