$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/NetFiddle.feature");
formatter.feature({
  "name": "User should be able to test net fiddle functionalities",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ihsMarkitTest.step_definitions.NetFiddleStepDefs.the_user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user should navigate main page and click run button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "the user click run button",
  "keyword": "When "
});
formatter.match({
  "location": "com.ihsMarkitTest.step_definitions.NetFiddleStepDefs.the_user_click_run_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message should\tbe\tdisplayed “Hello World”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ihsMarkitTest.step_definitions.NetFiddleStepDefs.message_should_be_displayed_Hello_World()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: the user should navigate main page and click run button");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ihsMarkitTest.step_definitions.NetFiddleStepDefs.the_user_is_on_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user should click share button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "the user should click share button",
  "keyword": "When "
});
formatter.match({
  "location": "com.ihsMarkitTest.step_definitions.NetFiddleStepDefs.the_user_should_click_share_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message link starts with message link",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ihsMarkitTest.step_definitions.NetFiddleStepDefs.message_link_starts_with_message_link()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: the user should click share button");
formatter.after({
  "status": "passed"
});
});