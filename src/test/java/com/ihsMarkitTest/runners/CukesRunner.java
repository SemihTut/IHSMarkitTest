package com.ihsMarkitTest.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/cucumber.json"
        },

        features = "src/test/resources/features",
        glue = "com/ihsMarkitTest/step_definitions",
        dryRun = false,
        tags = "@test"
)
public class CukesRunner {
}
