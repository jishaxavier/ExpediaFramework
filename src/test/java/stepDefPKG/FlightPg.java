package stepDefPKG;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlightPg {
	WebDriver flight = Hooks.driver;
	public Properties prop;
	By flightButton = By.linkText("Flights");
	By roundtrip = By.xpath("//span[text()='Roundtrip']");
	By oneway = By.xpath("//span[text()='One-way']");
	By fromBttn = By.cssSelector("div#location-field-leg1-origin-menu");
	By fromInput = By.cssSelector("input#location-field-leg1-origin");
	By toBttn = By.cssSelector("div#location-field-leg1-destination-menu");
	By toInput = By.cssSelector("input#location-field-leg1-destination");
	
	@Given("^properties are opened$")
    public void properties_are_opened() throws IOException {
       callProperties();
    }
	
	@Given("^user is in flights page$")
    public void user_is_in_flights_page() throws InterruptedException  {
        flight.get(prop.getProperty("homeurl"));
        Thread.sleep(1000);
        flight.findElement(flightButton).click();
        System.out.println(flight.getCurrentUrl());
        System.out.println("flights button clicked");
        
    }

	@When("^user input from (.+) and to (.+)location$")
    public void user_input_from_and_to_location(String from, String to) {
        flight.findElement(fromBttn).click();
        flight.findElement(fromInput).sendKeys(from);
        
    }
	
//	public void selectLocation(WebDriver driver,String airportName) {
//		List<WebElement> airportList = new ArrayList<WebElement>();
//		airportList = driver.findElements(By.cssSelector("li.uitk-typeahead-result-item.has-subtext strong")); 
//		for(int i=0; i<airportList.size(); i++) {
//			fromAirportList = airportList.get(i).getText();
//			if(fromAirportList.contains(airportName)) {
//				airportList.get(i).click();
//				break;
//			}	
//		}
//	}

    @Then("^verify you have search results$")
    public void verify_you_have_search_results()  {
       
    }

    @And("^verify round trip button clicked$")
    public void verify_round_trip_button_clicked() {
        
    }

    @And("^user gives departure (.+) date$")
    public void user_gives_departure_date(String departdate){
        
    }

    @And("^user gives return (.+) date$")
    public void user_gives_return_date(String returndate){
        
    }

//    @And("^user selects count(.+) (.+) (.+) $")
//    public void user_selects_count(int adultCount, int childCount, int infantCount){
//        
//    }

    @When("^user selects count(\\d+) (\\d+) (\\d+)$")
    public void user_selects_count(int adultCount, int childCount, int infantCount) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        
    }


    @And("^user selects class (.+)$")
    public void user_selects_class(String travelclass)  {
        
    }

    @And("^clicks on search button$")
    public void clicks_on_search_button() {
        
    }
    
    public void callProperties() throws IOException {
		prop = new Properties();
		FileInputStream fis = new FileInputStream(".//Resources//config.properties");
		prop.load(fis);

	}

}
