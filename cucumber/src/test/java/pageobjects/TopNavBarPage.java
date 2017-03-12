package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TopNavBarPage extends BaseClass{

	public TopNavBarPage(WebDriver driver) {
		super(driver);
	}
	
	@FindBy(id = "account-dropdown-a")
	public WebElement AccountDropDown;
	
	@FindBy(id = "button-Loggout")
	public WebElement LogOutButton;
	
	@FindBy(id = "nav-login-button")
	public WebElement NavLoginButton;
	
	@FindBy(id = "login-username")
	public WebElement LoginUsernameField;
	
	@FindBy(id = "login-password")
	public WebElement LoginPasswordField;
	
	@FindBy(id = "login-button")
	public WebElement LoginButton;
}
