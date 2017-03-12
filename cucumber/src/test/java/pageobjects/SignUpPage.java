package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignUpPage extends BaseClass {

	public SignUpPage(WebDriver driver) {
		super(driver);
	}
	
	@FindBy(id = "signup-box")
	public WebElement SignUpPopUP;
	
	@FindBy(id = "search-location")
	public WebElement SearchLocationField;
	
	@FindBy(id = "max-rent")
	public WebElement MaxRentField;
	
	@FindBy(id = "moving-date")
	public WebElement MovingDateField;
	
	@FindBy(id = "first-name")
	public WebElement FirstName;
	
	@FindBy(id = "userType")
	public WebElement UserType;
	
	@FindBy(id = "age")
	public WebElement Age;
	
	@FindBy(id = "occupation")
	public WebElement Occupation;
	
	@FindBy(id = "email")
	public WebElement EmailField;
	
	@FindBy(id = "password")
	public WebElement PasswordField;
	
	//@FindBy(xpath = ".//label[@id='labelAcknowledgement']")
	@FindBy(id = "labelAcknowledgement")
	public WebElement TermsAndCondition;
	
	@FindBy(id = "btnSubmit")
	public WebElement CreateProfileButton;
	
	@FindBy(className = "ui-link")
	public WebElement SkipThisStep;  
	
}
