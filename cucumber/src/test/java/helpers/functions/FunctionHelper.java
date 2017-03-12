package helpers.functions;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

import org.openqa.selenium.WebDriver;

import pageobjects.BaseClass;

public class FunctionHelper extends BaseClass{

	  public static String generatedEmail;
	  public static String generatedMDate;
	  public static String storeRandomAge;

	  public FunctionHelper(WebDriver driver) {
			super(driver);
		}
	  
	  public static String uniqueEmail() {
		    long time = Instant.now().getEpochSecond();
		    String email = time + "sobi.vas@mailinator.com";
		    generatedEmail = email;
		    return email;
	  }
	  
	  public static String moveDate() {

		  SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		  Calendar moveDate = Calendar.getInstance();
		  moveDate.setTime(new Date());
		  moveDate.add(Calendar.DATE, 90); // Adding 90 days
		  String outputDate = sdf.format(moveDate.getTime());
		  System.out.println(outputDate);
		  generatedMDate = outputDate;
		  return outputDate;  
	  }
	  
	  public static String age(){
		  Random rand = new Random();   
		    int randomNum = rand.nextInt((99 - 18) + 1) + 18;
		     String randomAge = String.format ("%d", randomNum);
		     storeRandomAge = randomAge;
		    return randomAge;
	  }
}