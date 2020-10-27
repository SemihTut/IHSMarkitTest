package com.ihsMarkitTest.pages;

import com.ihsMarkitTest.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NetFiddlePage {

    public NetFiddlePage() {
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(id = "run-button")
    public WebElement runButton;

    @FindBy(id = "output")
    public WebElement outputMessage;

    @FindBy(id = "Share")
    public WebElement shareButton;

    @FindBy(css = "*[name='ShareLink']")
    public WebElement shareLink;




}
