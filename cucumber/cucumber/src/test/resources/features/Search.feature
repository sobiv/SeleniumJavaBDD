#Feature: As a QA I want to be able to perform search successfully
#
  #Background: Homepage
    #Given I am on homepage
#
  #Scenario Outline: General Search
    #When I type "<Books>" in searchField (SearchPage)
    #And I click on searchButton (SearchPage)
    #Then "<Books>" should be displayed in searchTitle (SearchPage)
#
    #Examples: 
      #| Books                                                    |
      #| Artificial Organ Engineering                             |
      #| Therapeutic and Diagnostic Nanomaterials                 |
      #| Controlling Synchronization Patterns in Complex Networks |
#
#This below step contain a bug where expected start date does not display.
  #Scenario Outline: Advanced Search
    #And I click on searchOptionButton (SearchPage)
    #And I click on searchOption (SearchPage) containing "Advanced Search"
    #And I select "in" from dropdown text in dateModeType (SearchPage)
    #And I type "<startDate>" in startDate (SearchPage)
    #And I click on advanceSearchButton (SearchPage)
    #Then "<startDate>" should be displayed in resultContent (SearchPage)
#
    #Examples: Date
      #| startDate |
      #|      2010 |
     #
  #Scenario: Content Type
    #And I click on disciplineList (SearchPage) containing "Engineering"
    #And I click on contentType (SearchPage) containing "Books"
    #Then "Book" should be displayed in displayContentType (SearchPage)
