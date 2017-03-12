Feature: CreateProfile
  As a QA, I want to make sure that I can register and login successfully

  Background: Homepage
    Given I am on "" page

  Scenario: Check sign up light box appears
    When I click on startYourSearchButton (HomePage)
    Then I should see SignUpPopUP (SignUpPage)

  Scenario: Create profile and login
    And I click on startYourSearchButton (HomePage)
    #Registration Start
    And I type "N1 4RF" in SearchLocationField (SignUpPage)
    And I type ENTER key in SearchLocationField (SignUpPage)
    And I type "1000" in MaxRentField (SignUpPage)
    And I type "<MovingDate>" in MovingDateField (SignUpPage)
    And I type "Sobi Vas" in FirstName (SignUpPage)
    And I select "Male" from dropdown text in UserType (SignUpPage)
    And I select "<Age>" from dropdown text in Age (SignUpPage)
    And I select "Student" from dropdown text in Occupation (SignUpPage)
    And I type "<UniqueEmail>" in EmailField (SignUpPage)
    And I type "Password01" in PasswordField (SignUpPage)
    And I type TAB key in PasswordField (SignUpPage)
    And I click on TermsAndCondition (SignUpPage)
    When I click on CreateProfileButton (SignUpPage)
    #Registration completed
    And I click on SkipThisStep (SignUpPage)
    Then "Sobi Vas" should be displayed in AccountDropDown (TopNavBarPage)
    And I click on AccountDropDown (TopNavBarPage)
    And I click on LogOutButton (TopNavBarPage)
    # Test login after creating a user
    And I click on NavLoginButton (TopNavBarPage)
    And I type "<CreatedEmail>" in LoginUsernameField (TopNavBarPage)
    And I type "Password01" in LoginPasswordField (TopNavBarPage)
    And I type TAB key in LoginPasswordField (TopNavBarPage)
    And I click on LoginButton (TopNavBarPage)
    Then "Sobi Vas" should be displayed in AccountDropDown (TopNavBarPage)
