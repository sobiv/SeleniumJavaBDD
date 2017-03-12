$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CreateProfile.feature");
formatter.feature({
  "line": 1,
  "name": "CreateProfile",
  "description": "As a QA, I want to make sure that I can register and login successfully",
  "id": "createprofile",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5300228965,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on \"\" page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "General.I_am_on__page(String)"
});
formatter.result({
  "duration": 3449264051,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Check sign up light box appears",
  "description": "",
  "id": "createprofile;check-sign-up-light-box-appears",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I click on startYourSearchButton (HomePage)",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see SignUpPopUP (SignUpPage)",
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
  "duration": 293108963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "SignUpPopUP",
      "offset": 13
    },
    {
      "val": "SignUpPage",
      "offset": 26
    }
  ],
  "location": "General.iShouldSee(String,String,String)"
});
formatter.result({
  "duration": 155171913,
  "status": "passed"
});
formatter.after({
  "duration": 1132150472,
  "status": "passed"
});
formatter.before({
  "duration": 4413259481,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on \"\" page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "General.I_am_on__page(String)"
});
formatter.result({
  "duration": 3114967785,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create profile and login",
  "description": "",
  "id": "createprofile;create-profile-and-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I click on startYourSearchButton (HomePage)",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on SignUpWithEmail (HomePage)",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Registration Start"
    }
  ],
  "line": 15,
  "name": "I type \"N1 4RF\" in SearchLocationField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type ENTER key in SearchLocationField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I type \"1000\" in MaxRentField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I type \"\u003cMovingDate\u003e\" in MovingDateField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I type \"Sobi Vas\" in FirstName (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select \"Male\" from dropdown text in UserType (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"\u003cAge\u003e\" from dropdown text in Age (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"Student\" from dropdown text in Occupation (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I type \"\u003cUniqueEmail\u003e\" in EmailField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I type \"Password01\" in PasswordField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I type TAB key in PasswordField (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on TermsAndCondition (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on CreateProfileButton (SignUpPage)",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#Registration completed"
    }
  ],
  "line": 30,
  "name": "I click on SkipThisStep (SignUpPage)",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "\"Sobi Vas\" should be displayed in AccountDropDown (TopNavBarPage)",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on AccountDropDown (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on LogOutButton (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "# Test login after creating a user #"
    }
  ],
  "line": 36,
  "name": "I click on NavLoginButton (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I type \"\u003cCreatedEmail\u003e\" in LoginUsernameField (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I type \"Password01\" in LoginPasswordField (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I type TAB key in LoginPasswordField (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on LoginButton (TopNavBarPage)",
  "keyword": "And "
});
formatter.step({
  "line": 41,
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
  "duration": 236800690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignUpWithEmail",
      "offset": 11
    },
    {
      "val": "HomePage",
      "offset": 28
    }
  ],
  "location": "General.iClickOn(String,String)"
});
formatter.result({
  "duration": 416297102,
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
  "duration": 438315695,
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
  "duration": 60522370,
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
  "duration": 236964909,
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
  "duration": 315236608,
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
  "duration": 269995151,
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
  "duration": 258904386,
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
  "duration": 265002724,
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
  "duration": 258891556,
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
  "duration": 270972339,
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
  "duration": 319094470,
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
  "duration": 53420757,
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
  "duration": 187080847,
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
  "duration": 225469157,
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
  "duration": 3091758178,
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
  "duration": 2098376970,
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
  "duration": 159805965,
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
  "duration": 246516548,
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
  "duration": 2009989556,
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
  "duration": 431267967,
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
  "duration": 305197444,
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
  "duration": 63240963,
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
  "duration": 213034706,
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
  "duration": 2053989963,
  "status": "passed"
});
formatter.after({
  "duration": 1123740668,
  "status": "passed"
});
});