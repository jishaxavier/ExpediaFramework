package stepDefPKG;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static WebDriver driver;
	//public static Properties prop;
	public static Connection con;
	@Before
	public void beforeScenario() throws SQLException, IOException{
		System.setProperty("webdriver.chrome.driver", "//Users//sandeep//eclipseJXworkspace//Driver//chromedriver");
		driver = new ChromeDriver();
		//driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		//callProperties();
	//	String host = prop.getProperty("host");
	//	String port = prop.getProperty("port");
	//	String dbName = prop.getProperty("dbName");
	//	String mysqlUN = prop.getProperty("mysqlUN");
	//	String mysqlPWD = prop.getProperty("mysqlPWD");
	//	//URL="jdbc:mysql://localhost:3306/seleniumdb"
	//	String url = "jdbc:mysql://" + host + ":" + port + "/" + dbName;
	//	con = DriverManager.getConnection(url, mysqlUN, mysqlPWD);
	    
	} 	 
	 
	@After
	public void afterScenario(){
		 
		driver.quit();
	    System.out.println("Quitted Page");
	}	
 
}
