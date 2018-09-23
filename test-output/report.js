$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/com/Features/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deals test functionality",
  "description": "",
  "id": "free-crm-deals-test-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM new deals functionality test",
  "description": "",
  "id": "free-crm-deals-test-functionality;free-crm-new-deals-functionality-test",
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
  "name": "user enters credentials userName and password",
  "rows": [
    {
      "cells": [
        "chandan4crm",
        "chandan@crm"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deals details",
  "rows": [
    {
      "cells": [
        "Deal_Test",
        "550",
        "65",
        "23",
        "This is for test automation"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that deals details successfully added",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the application and browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Deals_Step_Definition.user_is_present_on_Login_Page()"
});
formatter.result({
  "duration": 86550614114,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 280753711,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.user_enters_credentials(DataTable)"
});
formatter.result({
  "duration": 1319393738,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 25314546059,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 16343669,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 5155351519,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 5748542760,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.verify_that_deals_details_successfully_added()"
});
formatter.result({
  "duration": 96375987,
  "status": "passed"
});
formatter.match({
  "location": "Deals_Step_Definition.close_the_application_and_browser()"
});
formatter.result({
  "duration": 856211752,
  "status": "passed"
});
});