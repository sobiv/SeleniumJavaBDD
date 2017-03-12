package step_definitions;

import static org.testng.AssertJUnit.assertFalse;
import static org.testng.AssertJUnit.assertTrue;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import helpers.functions.FunctionHelper;

public class General {
	public WebDriver driver;
	public final String baseUrl = "http://uk.easyroommate.com";
	public WebDriverWait wait;

	public General() {
		driver = Hooks.driver;
		wait = new WebDriverWait(driver, 30);
	}

	@Given("^I am on homepage$")
	public void i_am_on_homepage() throws Throwable {
		driver.get(baseUrl);
	}
	
	 @Given("^I am on \"(.*)\" page$")
	  public void I_am_on__page(String page) throws Throwable {
	    driver.get(baseUrl + "/" + page);
	  }

	@Then("^I should (|not )see (\\w+) \\((.+)\\)$")
	  public void iShouldSee(String modifier, String elementName, String pageObjString) throws Throwable {
	    Object pageObj = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObjString));
	    List<WebElement> elements = new ArrayList<>();
	    try {
	      elements = (List<WebElement>) pageObj.getClass().getDeclaredField(elementName).get(pageObj);
	    } catch (ClassCastException ex) {
	      elements.add((WebElement) pageObj.getClass().getDeclaredField(elementName).get(pageObj));
	    }
	    for (int index = 0; index < elements.size(); index++) {
	      try {
	        if (modifier.equals("")) {
	          assertTrue("index " + index, elements.get(index).isDisplayed());
	        } else {
	          assertFalse("index " + index, elements.get(index).isDisplayed());
	        }
	      } catch (NoSuchElementException ex) {
	        throw new NoSuchElementException(elementName);
	      }
	    }
	  }
	
	@And("^I type ([^\"]*) key in (\\w+) \\((.+)\\)$")
	  public void iTypeKey(String keyToSend, String name, String pageObj) throws Throwable {
	    Object page = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObj));
	    WebElement webElement = (WebElement) page.getClass().getDeclaredField(name).get(page);
	    Keys key = Keys.valueOf(keyToSend);
	    try {
	     webElement.sendKeys(key);
	    } catch (NoSuchElementException ex) {
	      throw new NoSuchElementException(name);
	    }
	}
	
	@And("^I type \"(<MovingDate>|<CreatedEmail>|<Age>|[^\"]*)\" in (\\w+) \\((.+)\\)$")
	  public void iTypeIn(String type, String name, String pageObj) throws Throwable {
	    Object page = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObj));
	    WebElement webElement = (WebElement) page.getClass().getDeclaredField(name).get(page);

	    switch (type) {
	      case "<MovingDate>":
	    	webElement.click();
		  	webElement.clear();
	        webElement.sendKeys(FunctionHelper.moveDate());
	        iTypeKey("ENTER",name,pageObj);
	        break;
	      case "<UniqueEmail>":
	    	webElement.click();
		  	webElement.clear();
	        webElement.sendKeys(FunctionHelper.uniqueEmail());
	        break;
	      case "<CreatedEmail>":
	    	  webElement.click();
			  webElement.clear();
	          webElement.sendKeys(FunctionHelper.generatedEmail);
	          break;
	      case "<Age>":
	    	  	webElement.click();
		  	    webElement.clear();
		        webElement.sendKeys(FunctionHelper.age());
		        
		        break;
	      default:
	    	webElement.click();
	  	    webElement.clear();
	        webElement.sendKeys(type);
	    }
	}

	@And("^I click on (\\w+) \\((.+)\\)$")
	public void iClickOn(String elementName, String pageObj) throws Throwable {
		Object page = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObj));
		WebElement webElement = (WebElement) page.getClass().getDeclaredField(elementName).get(page);
		wait.until(ExpectedConditions.elementToBeClickable(webElement)).click();
		//webElement.click();
	}

	@Then("^\"([^\"]*)\" should be displayed in (\\w+) \\((.+)\\)$")
	public void shouldBeDisplayedIn(String text, String elementName, String pageObjString) throws Throwable {
		Object pageObj = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObjString));
		List<WebElement> elements = new ArrayList<>();
		try {
			elements = (List<WebElement>) pageObj.getClass().getDeclaredField(elementName).get(pageObj);
		} catch (ClassCastException ex) {
			elements.add((WebElement) pageObj.getClass().getDeclaredField(elementName).get(pageObj));
		}
		Thread.sleep(2000);
		for (int index = 0; index < elements.size(); index++) {
			String actual = elements.get(index).getText();

			if (actual.equals("")) {

				actual = elements.get(index).getAttribute("innerHTML");
			}
			assertTrue(elementName + " index " + index + " does not contain", actual.contains(text));
			System.out.println(actual);
		}
	}

	@And("^I click on (\\w+) \\((.+)\\) containing \"([^\"]*)\"$")
	public void iClickOnTextValue(String elementName, String pageObj, String text) throws Throwable {
		Object page = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObj));
		List<WebElement> webElements = (List<WebElement>) page.getClass().getDeclaredField(elementName).get(page);
		int retry = 0;
		for (WebElement element : webElements) {
			if (element.getText().contains(text)) {
				wait.until(ExpectedConditions.elementToBeClickable(element)).click();
				break;
			} else {
				retry++;
				if (++retry >= webElements.size()) {
					Assert.fail("Was not able to find " + text + " to click on");
				}
			}
		}
	}
//	@And("^I type \"(<MovingDate>|<CreatedEmail>|<Age>|[^\"]*)\" in (\\w+) \\((.+)\\)$")

	@And("^I select \"(<Age>|[^\"]*)\" from dropdown text in (\\w+) \\((.+)\\)$")
	public void iSelectFromDropdownText(String text, String elementName, String pageObj) throws Throwable {
		Object page = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObj));
		WebElement webElement = (WebElement) page.getClass().getDeclaredField(elementName).get(page);
		//wait.until(ExpectedConditions.textToBePresentInElement(webElement, text));
		//Select selectElement = new Select(webElement);
		//selectElement.selectByVisibleText(text);

		switch (text) {
	    
	      case "<Age>":
	    	wait.until(ExpectedConditions.textToBePresentInElement(webElement, FunctionHelper.age()));
	  		Select selectElementAge = new Select(webElement);
	  		selectElementAge.selectByVisibleText(FunctionHelper.storeRandomAge);
		        break;
	      default:
	    	  wait.until(ExpectedConditions.textToBePresentInElement(webElement, text));
	  		Select selectElement = new Select(webElement);
	  		selectElement.selectByVisibleText(text);

	    }
		
	}
	
	@And("^I select \"([^\"]*)\" from dropdown value in (\\w+) \\((.+)\\)$")
	  public void iSelectFromDropdownValue(String value, String elementName, String pageObj) throws Throwable {
	    Object page = PageFactory.initElements(driver, Class.forName("pageobjects." + pageObj));
	    WebElement webElement = (WebElement) page.getClass().getDeclaredField(elementName).get(page);
	    Select selectElement = new Select(webElement);
	    selectElement.selectByValue(value);
	  }
	
}