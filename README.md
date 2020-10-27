# IHSMarkitTest

TOOLS AND EXPLANATIONS

The project has been prepared based on Cucumber BDD style. Maven build management tool is used in this project by Java (JDK8+) language. 
In the project created by using the Page Object Design Pattern, the data were collected under the pages package. 
Dependencies have been prepared under the pom.xml file. Webdriver Manager dependency was used from this project. 
The project was tried to be controlled from the centre using configuration.properties and ConfigurationReader. 
Driver based on Singleton Design Pattern was used and parallel testing was supported with driverPool. (In the pom.xml parallel,perCoreThreadCount,threadCountMethods)

Technology Stack

• Java

• Selenium WebDriver

• Maven

• Cucucmber

• JUnit

Prerequisites

• Windows

• Java 1.8 - Java Dev Kit

• Maven - Dependency Manager

• IntelliJ IDEA – IDE

HOW TO RUN TESTS

-> Under the runners package "CukesRunner" right click and run CukesRunner. Also path "src > test > java > com > ihsMarkitTest > runners > CukesRunner"

-> mvn verify --> in the IDE console or navigate project path in command line and run.

HOW TO CREATE TEST REPORTS

1-) When you run tests with the "mvn verify" command from the console, you can see Cucumber Html Report under the target file.

-> target -> cucumber-html-reports > overview-steps.html (open with chrome option)

2-) Second type of report, the project is run from Runner class, a Cucumber Report link is created in the IDE console automatically.

Sample link -> View your Cucumber Report at: (Works 24 hours later than it will delete automatically)

http://localhost:63342/IHSMarkitTest/target/cucumber-html-reports/overview-tags.html

3-) The Driver, pom.xml and console are ready for Parallel testing. Type mvn verify -Dbrowser-firefox from the console and the relevant browser will open automatically. The only feature is thread one.

4-) To run a special tag, when you type @001 in the tags (tags = "@test1") section in the Runner, only that tag will work specifically. It also works exclusively in the console with mvn verify -Dcucumber.options = "- tags @test2". 


Halil Erdogan

QA Automation Engineer | SDET

https://www.linkedin.com/in/ha-lil-erdogan-b6b2a71b4

![image](https://user-images.githubusercontent.com/62216647/97370283-8c27fa00-18a6-11eb-8235-96c0a5d3a6ac.png)
![image](https://user-images.githubusercontent.com/62216647/97370298-934f0800-18a6-11eb-89f0-e6913f9aff5e.png)
![image](https://user-images.githubusercontent.com/62216647/97370306-98ac5280-18a6-11eb-97ba-7f2565d0a4a9.png)
