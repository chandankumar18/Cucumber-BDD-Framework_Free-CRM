package com.My_Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "./src/main/java/com/Features/Contacts.feature", // Path of the feature files
				 glue = {"com.Step_Definations"}, //Path of the step definition files
				 format = {"pretty", "html:test-output", "json: JSON-Output/Cucumber.json", 
						    "junit: JUNIT-Output/Cucumber.xml"}, // To generate different types of reporting
				 monochrome = true, // Display the console output in a proper readable format
				 strict = true, //It will check if any step is not defined in step definition file
				 dryRun = false) // To check the mapping is proper between feature file and step definition file

public class Test_Runner {

}
