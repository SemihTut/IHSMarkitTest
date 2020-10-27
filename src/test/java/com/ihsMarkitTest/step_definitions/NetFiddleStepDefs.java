package com.ihsMarkitTest.step_definitions;

import com.ihsMarkitTest.pages.NetFiddlePage;
import com.ihsMarkitTest.utilities.ConfigurationReader;
import com.ihsMarkitTest.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class NetFiddleStepDefs {
    NetFiddlePage netFiddlePage = new NetFiddlePage();


    @Given("the user is on the main page")
    public void the_user_is_on_the_main_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));

    }
    @When("the user click run button")
    public void the_user_click_run_button() {
        netFiddlePage.runButton.click();

    }

    @Then("message should	be	displayed “Hello World”")
    public void message_should_be_displayed_Hello_World() {
        String actualMessage = netFiddlePage.outputMessage.getText();
        Assert.assertEquals("Hello World", actualMessage);
        System.out.println("actualMessage = " + actualMessage);

    }

    @When("the user should click share button")
    public void the_user_should_click_share_button() {
       netFiddlePage.shareButton.click();

    }

    @Then("message link starts with message link")
    public void message_link_starts_with_message_link() {
        String actualLink = Driver.getDriver().getCurrentUrl();
        Assert.assertEquals("https://dotnetfiddle.net/", actualLink);
        System.out.println("actualLink = " + actualLink);
    }

}
