#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Expedia flight booking page
  
Background: Flight booking page
Given properties are opened

  Scenario Outline: Make a round trip search
    Given user is in flights page
    And verify round trip button clicked
    When user input from <from> and to <to>location
    And user gives departure <departDate> date
    And user gives return <returnDate> date
    And user selects count<adultCount> <childCount> <infantCount> 
    And user selects class <travelClass>
    And clicks on search button
    Then verify you have search results
    
  Examples:
  | from          | to          | departDate | returnDate | adultCount | childCount | infantCount | travelClass |
  | Toronto (YYZ) | Delhi (DEL) | August 14    | August 30    | 2          | 2 					| 0 					| Business |
  

  
  