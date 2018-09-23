$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/com/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts test",
  "description": "",
  "id": "free-crm-create-contacts-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM new contacs functionality test",
  "description": "",
  "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters credentials \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
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
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details \"\u003cfirstName\u003e\", \"\u003clastName\u003e\" and \"\u003cCompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that users details successfully added",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "firstName",
        "lastName",
        "CompanyName"
      ],
      "line": 16,
      "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;;1"
    },
    {
      "cells": [
        "chandan4crm",
        "chandan@crm",
        "Sam",
        "Desouza",
        "L\u0026T"
      ],
      "line": 17,
      "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;;2"
    },
    {
      "cells": [
        "chandan4crm",
        "chandan@crm",
        "Rohan",
        "Sinha",
        "Microsoft"
      ],
      "line": 18,
      "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;;3"
    },
    {
      "cells": [
        "seleniumcucumber",
        "selenium@456",
        "Sohan",
        "Dev",
        "IBM India Pvt. Ltd."
      ],
      "line": 19,
      "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM new contacs functionality test",
  "description": "",
  "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters credentials \"chandan4crm\" and \"chandan@crm\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details \"Sam\", \"Desouza\" and \"L\u0026T\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that users details successfully added",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_Defination.user_is_present_on_Login_Page()"
});
formatter.result({
  "duration": 70979234008,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 24858752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandan4crm",
      "offset": 25
    },
    {
      "val": "chandan@crm",
      "offset": 43
    }
  ],
  "location": "Login_Step_Defination.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 549915641,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 23145115060,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12529157,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 6505093142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 30
    },
    {
      "val": "Desouza",
      "offset": 37
    },
    {
      "val": "L\u0026T",
      "offset": 51
    }
  ],
  "location": "Login_Step_Defination.user_enters_contacts_details_and(String,String,String)"
});
formatter.result({
  "duration": 5543450359,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.verify_that_users_details_successfully_added()"
});
formatter.result({
  "duration": 185248961,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.close_the_application_and_browser()"
});
formatter.result({
  "duration": 833276790,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM new contacs functionality test",
  "description": "",
  "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters credentials \"chandan4crm\" and \"chandan@crm\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details \"Rohan\", \"Sinha\" and \"Microsoft\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that users details successfully added",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_Defination.user_is_present_on_Login_Page()"
});
formatter.result({
  "duration": 22473706387,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 60891911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandan4crm",
      "offset": 25
    },
    {
      "val": "chandan@crm",
      "offset": 43
    }
  ],
  "location": "Login_Step_Defination.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 675296167,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 10605855531,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 14565845,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 4579683653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rohan",
      "offset": 30
    },
    {
      "val": "Sinha",
      "offset": 39
    },
    {
      "val": "Microsoft",
      "offset": 51
    }
  ],
  "location": "Login_Step_Defination.user_enters_contacts_details_and(String,String,String)"
});
formatter.result({
  "duration": 5017405346,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.verify_that_users_details_successfully_added()"
});
formatter.result({
  "duration": 70142528,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.close_the_application_and_browser()"
});
formatter.result({
  "duration": 787693099,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM new contacs functionality test",
  "description": "",
  "id": "free-crm-create-contacts-test;free-crm-new-contacs-functionality-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters credentials \"seleniumcucumber\" and \"selenium@456\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details \"Sohan\", \"Dev\" and \"IBM India Pvt. Ltd.\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that users details successfully added",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_Defination.user_is_present_on_Login_Page()"
});
formatter.result({
  "duration": 73541484945,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 13844565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seleniumcucumber",
      "offset": 25
    },
    {
      "val": "selenium@456",
      "offset": 48
    }
  ],
  "location": "Login_Step_Defination.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 449635056,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 20023598652,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_Defination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 54069125,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.Step_Definations.Login_Step_Defination.user_is_on_Home_Page(Login_Step_Defination.java:61)\r\n\tat ✽.Then user is on Home Page(./src/main/java/com/Features/Contacts.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_Step_Defination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sohan",
      "offset": 30
    },
    {
      "val": "Dev",
      "offset": 39
    },
    {
      "val": "IBM India Pvt. Ltd.",
      "offset": 49
    }
  ],
  "location": "Login_Step_Defination.user_enters_contacts_details_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_Defination.verify_that_users_details_successfully_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_Defination.close_the_application_and_browser()"
});
formatter.result({
  "status": "skipped"
});
});