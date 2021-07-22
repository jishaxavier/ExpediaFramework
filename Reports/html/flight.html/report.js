$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/featurePKG/flightPg.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Expedia flight booking page",
  "description": "",
  "id": "expedia-flight-booking-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Make a round trip search",
  "description": "",
  "id": "expedia-flight-booking-page;make-a-round-trip-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "user is in flights page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "verify round trip button clicked",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user input from \u003cfrom\u003e and to \u003cto\u003elocation",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user gives departure \u003cdepartDate\u003e date",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user gives return \u003creturnDate\u003e date",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user selects count\u003cadultCount\u003e \u003cchildCount\u003e \u003cinfantCount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user selects class \u003ctravelClass\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify you have search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "expedia-flight-booking-page;make-a-round-trip-search;",
  "rows": [
    {
      "cells": [
        "from",
        "to",
        "departDate",
        "returnDate",
        "adultCount",
        "childCount",
        "infantCount",
        "travelClass"
      ],
      "line": 36,
      "id": "expedia-flight-booking-page;make-a-round-trip-search;;1"
    },
    {
      "cells": [
        "Toronto (YYZ)",
        "Delhi (DEL)",
        "August 14",
        "August 30",
        "2",
        "2",
        "0",
        "Business"
      ],
      "line": 37,
      "id": "expedia-flight-booking-page;make-a-round-trip-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1569083548,
  "status": "passed"
});
formatter.background({
  "line": 21,
  "name": "Flight booking page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 22,
  "name": "properties are opened",
  "keyword": "Given "
});
formatter.match({
  "location": "FlightPg.properties_are_opened()"
});
formatter.result({
  "duration": 75423849,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Make a round trip search",
  "description": "",
  "id": "expedia-flight-booking-page;make-a-round-trip-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "user is in flights page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "verify round trip button clicked",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user input from Toronto (YYZ) and to Delhi (DEL)location",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user gives departure August 14 date",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user gives return August 30 date",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user selects count2 2 0",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user selects class Business",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify you have search results",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightPg.user_is_in_flights_page()"
});
formatter.result({
  "duration": 2415874331,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Flights\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027sandeeps-MacBook-Pro.local\u0027, ip: \u00272607:fea8:42a4:8200:0:0:0:a8c3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/wc/_5ysbj351dg...}, goog:chromeOptions: {debuggerAddress: localhost:59397}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b85e04b9346b064546adfae8a0d5ea68\n*** Element info: {Using\u003dlink text, value\u003dFlights}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefPKG.FlightPg.user_is_in_flights_page(FlightPg.java:38)\n\tat ✽.Given user is in flights page(src/test/java/featurePKG/flightPg.feature:25)\n",
  "status": "failed"
});
formatter.match({
  "location": "FlightPg.verify_round_trip_button_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Toronto (YYZ)",
      "offset": 16
    },
    {
      "val": "Delhi (DEL)",
      "offset": 37
    }
  ],
  "location": "FlightPg.user_input_from_and_to_location(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "August 14",
      "offset": 21
    }
  ],
  "location": "FlightPg.user_gives_departure_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "August 30",
      "offset": 18
    }
  ],
  "location": "FlightPg.user_gives_return_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 22
    }
  ],
  "location": "FlightPg.user_selects_count(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Business",
      "offset": 19
    }
  ],
  "location": "FlightPg.user_selects_class(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightPg.clicks_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightPg.verify_you_have_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 89068157,
  "status": "passed"
});
});