package runnerPKG;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/java/featurePKG/flightPg.feature"},
		glue = {"stepDefPKG"},
		plugin = {"pretty","html:Reports/html/flight.html"}
		)

public class Runner {

}
