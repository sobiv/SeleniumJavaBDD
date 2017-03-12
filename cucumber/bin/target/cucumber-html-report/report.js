$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CreateProfile.feature");
formatter.feature({
  "line": 1,
  "name": "CreateProfile",
  "description": "As a QA, I want to make sure that I can register and login successfully",
  "id": "createprofile",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3908953749,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "General.i_am_on_homepage()"
});
formatter.result({
  "duration": 4102617285,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Create profile and login",
  "description": "",
  "id": "createprofile;create-profile-and-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 46,
      "value": "#Given I am on homepage"
    }
  ],
  "line": 47,
  "name": "I click on startYourSearchButton (HomePage)",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 48,
      "value": "#Registration Start"
    }
  ],
  "line": 49,
  "name": "I type \"N1 4RF\" in SearchLocationField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I type ENTER key in SearchLocationField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I type \"1000\" in MaxRentField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I type \"\u003cMovingDate\u003e\" in MovingDateField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 53,
      "value": "#And I type ENTER key in SearchLocationField (SignUpPage)"
    }
  ],
  "line": 54,
  "name": "I type \"Sobi Vas\" in FirstName (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select \"Male\" from dropdown text in UserType (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select \"\u003cAge\u003e\" from dropdown text in Age (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select \"Student\" from dropdown text in Occupation (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I type \"\u003cUniqueEmail\u003e\" in EmailField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I type \"Password01\" in PasswordField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I type TAB key in PasswordField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on TermsAndCondition (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click on CreateProfileButton (SignUpPage)",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 65,
      "value": "#Registration completed"
    }
  ],
  "line": 67,
  "name": "I click on SkipThisStep (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "\"Sobi Vas\" should be displayed in AccountDropDown (TopNavBarPage)",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I click on AccountDropDown (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click on LogOutButton (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 72,
      "value": "# Test login after creating a user"
    }
  ],
  "line": 73,
  "name": "I click on NavLoginButton (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I type \"\u003cCreatedEmail\u003e\" in LoginUsernameField (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I type \"Password01\" in LoginPasswordField (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I type TAB key in LoginPasswordField (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click on LoginButton (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "\"Sobi Vas\" should be displayed in AccountDropDown (TopNavBarPage)",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "startYourSearchButton",
      "offset": 11
    },
    {
      "val": "HomePage",
      "offset": 34
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 464132019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N1 4RF",
      "offset": 8
    },
    {
      "val": "SearchLocationField",
      "offset": 19
    },
    {
      "val": "SignUpPage",
      "offset": 40
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 421836183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ENTER",
      "offset": 7
    },
    {
      "val": "SearchLocationField",
      "offset": 20
    },
    {
      "val": "SignUpPage",
      "offset": 41
    }
  ],
  "location": "General.iTypeKey(String,String,String)"
});
formatter.result({
  "duration": 55804997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 8
    },
    {
      "val": "MaxRentField",
      "offset": 17
    },
    {
      "val": "SignUpPage",
      "offset": 31
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 242791571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cMovingDate\u003e",
      "offset": 8
    },
    {
      "val": "MovingDateField",
      "offset": 25
    },
    {
      "val": "SignUpPage",
      "offset": 42
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 334150865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sobi Vas",
      "offset": 8
    },
    {
      "val": "FirstName",
      "offset": 21
    },
    {
      "val": "SignUpPage",
      "offset": 32
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 268474332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 10
    },
    {
      "val": "UserType",
      "offset": 38
    },
    {
      "val": "SignUpPage",
      "offset": 48
    }
  ],
  "location": "General.iSelectFromDropdownText(String,String,String)"
});
formatter.result({
  "duration": 268632992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cAge\u003e",
      "offset": 10
    },
    {
      "val": "Age",
      "offset": 39
    },
    {
      "val": "SignUpPage",
      "offset": 44
    }
  ],
  "location": "General.iSelectFromDropdownText(String,String,String)"
});
formatter.result({
  "duration": 265411901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Student",
      "offset": 10
    },
    {
      "val": "Occupation",
      "offset": 41
    },
    {
      "val": "SignUpPage",
      "offset": 53
    }
  ],
  "location": "General.iSelectFromDropdownText(String,String,String)"
});
formatter.result({
  "duration": 242836047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUniqueEmail\u003e",
      "offset": 8
    },
    {
      "val": "EmailField",
      "offset": 26
    },
    {
      "val": "SignUpPage",
      "offset": 38
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 283220268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password01",
      "offset": 8
    },
    {
      "val": "PasswordField",
      "offset": 23
    },
    {
      "val": "SignUpPage",
      "offset": 38
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 293281257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAB",
      "offset": 7
    },
    {
      "val": "PasswordField",
      "offset": 18
    },
    {
      "val": "SignUpPage",
      "offset": 33
    }
  ],
  "location": "General.iTypeKey(String,String,String)"
});
formatter.result({
  "duration": 52198163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TermsAndCondition",
      "offset": 11
    },
    {
      "val": "SignUpPage",
      "offset": 30
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 197284483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateProfileButton",
      "offset": 11
    },
    {
      "val": "SignUpPage",
      "offset": 32
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 242335692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SkipThisStep",
      "offset": 11
    },
    {
      "val": "SignUpPage",
      "offset": 25
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 761205283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sobi Vas",
      "offset": 1
    },
    {
      "val": "AccountDropDown",
      "offset": 34
    },
    {
      "val": "TopNavBarPage",
      "offset": 51
    }
  ],
  "location": "General.shouldBeDisplayedIn(String,String,String)"
});
formatter.result({
  "duration": 2100619286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountDropDown",
      "offset": 11
    },
    {
      "val": "TopNavBarPage",
      "offset": 28
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 175069996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LogOutButton",
      "offset": 11
    },
    {
      "val": "TopNavBarPage",
      "offset": 25
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 2814110785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NavLoginButton",
      "offset": 11
    },
    {
      "val": "TopNavBarPage",
      "offset": 27
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 237205982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cCreatedEmail\u003e",
      "offset": 8
    },
    {
      "val": "LoginUsernameField",
      "offset": 27
    },
    {
      "val": "TopNavBarPage",
      "offset": 47
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 432846135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password01",
      "offset": 8
    },
    {
      "val": "LoginPasswordField",
      "offset": 23
    },
    {
      "val": "TopNavBarPage",
      "offset": 43
    }
  ],
  "location": "General.iTypeIn(String,String,String)"
});
formatter.result({
  "duration": 282330749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAB",
      "offset": 7
    },
    {
      "val": "LoginPasswordField",
      "offset": 18
    },
    {
      "val": "TopNavBarPage",
      "offset": 38
    }
  ],
  "location": "General.iTypeKey(String,String,String)"
});
formatter.result({
  "duration": 46877292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginButton",
      "offset": 11
    },
    {
      "val": "TopNavBarPage",
      "offset": 24
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 248946795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sobi Vas",
      "offset": 1
    },
    {
      "val": "AccountDropDown",
      "offset": 34
    },
    {
      "val": "TopNavBarPage",
      "offset": 51
    }
  ],
  "location": "General.shouldBeDisplayedIn(String,String,String)"
});
formatter.result({
  "duration": 2091018453,
  "status": "passed"
});
formatter.after({
  "duration": 1121703483,
  "status": "passed"
});
});