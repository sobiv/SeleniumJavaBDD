package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BaseClass {

	public HomePage(WebDriver driver) {
		super(driver);
	}

	@FindBy(id = "search-bottom-button")
	public WebElement startYourSearchButton;


	@FindBy(id = "email-button")
	public WebElement SignUpWithEmail;
}
