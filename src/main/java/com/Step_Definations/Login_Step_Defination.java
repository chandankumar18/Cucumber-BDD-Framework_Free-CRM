package com.Step_Definations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Login_Step_Defination {
	
	WebDriver driver;
	
	@Given("^user is present on Login Page$")
	public void user_is_present_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}

	@When("^title of Login Page is Free CRM$")
	public void title_of_Login_Page_is_Free_CRM(){
		String title = driver.getTitle();
		System.out.println("Title of the current page: "+title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}
	
	//Regular Expression: either 1. \"(.*)\" or 2. \"([^\"]*)\"
	
	
	@Then("^user enters credentials \"(.*)\" and \"(.*)\"$")
	public void user_enters_credentials(String userName, String password){
		driver.findElement(By.name("username")).sendKeys(userName);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button() {
		Actions act = new Actions(driver);
		WebElement loginBTN = driver.findElement(By.xpath("//input[@value='Login']"));
		act.moveToElement(loginBTN).pause(1000).click().perform();
	}

	@Then("^user is on Home Page$")
	public void user_is_on_Home_Page() {
		String title = driver.getTitle();
		System.out.println("Title of the current page: "+title);
		Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("^user moves to new contacts page$")
	public void user_moves_to_new_contacts_page() {
		driver.switchTo().frame("mainpanel");
		/*WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[.='Contacts']")));*/
		WebElement contactsBTN = driver.findElement(By.xpath("//a[.='Contacts']"));
		Actions act = new Actions(driver);
		act.moveToElement(contactsBTN).pause(1000).perform();
		driver.findElement(By.xpath("//a[.='New Contact']")).click();
	}
	
	@And("^user enters contacts details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contacts_details(String firstName, String lastName, String companyName) {
	    
		Select sel = new Select(driver.findElement(By.xpath("//select[@name='title']")));
		sel.selectByVisibleText("Sir");
		
		driver.findElement(By.id("first_name")).sendKeys(firstName);
		driver.findElement(By.id("surname")).sendKeys(lastName);
		driver.findElement(By.name("client_lookup")).sendKeys(companyName);
		driver.findElement(By.xpath("//form[@id='contactForm']/descendant::input[@type='submit' and @value='Save']")).submit();
	}
	
	@And("^verify that users details successfully added$")
	public void verify_that_users_details_successfully_added() {
		String savedContactName = driver.findElement(By.xpath("//input[@value='Previous']/../preceding-sibling::td")).getText();
		System.out.println("Saved contact name is: "+savedContactName);
	}
	
	@Then("^close the application and browser$")
	public void close_the_application_and_browser(){
		driver.close();
		driver.quit();
	}

}
