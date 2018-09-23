package com.Step_Definitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Deals_Step_Definition {

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
	public void title_of_Login_Page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println("Title of the current page: " + title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}

	@Then("^user enters credentials userName and password$")
	public void user_enters_credentials(DataTable credentials) {
		List<List<String>> credentialsData = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(credentialsData.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(credentialsData.get(0).get(1));
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
		System.out.println("Title of the current page: " + title);
		Assert.assertEquals("CRMPRO", title);
	}

	@Then("^user moves to new deals page$")
	public void user_moves_to_new_deals_page() {
		driver.switchTo().frame("mainpanel");
		WebElement dealsBTN = driver.findElement(By.xpath("//a[.='Deals']"));
		Actions act = new Actions(driver);
		act.moveToElement(dealsBTN).pause(1000).perform();
		driver.findElement(By.xpath("//a[.='New Deal']")).click();
	}

	@And("^user enters deals details$")
	public void user_enters_deals_details(DataTable dealData) {
		List<List<String>> dealValues = dealData.raw();
		driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));
		driver.findElement(By.id("description")).sendKeys(dealValues.get(0).get(4));
		driver.findElement(By.xpath("//form[@id='prospectForm']/descendant::input[@type='submit' and @value='Save']"))
				.submit();
	}

	@And("^verify that deals details successfully added$")
	public void verify_that_deals_details_successfully_added() {
		String savedDealNumber = driver.findElement(By.xpath("//input[@value='Shortlist']/../preceding-sibling::td"))
				.getText();
		System.out.println("Saved deal number is: " + savedDealNumber.trim().replaceAll("[^0-9]", ""));
	}

	@Then("^close the application and browser$")
	public void close_the_application_and_browser() {
		driver.close();
		driver.quit();
	}

}
