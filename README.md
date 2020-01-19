# WizeLine Sample Project

# Introduction
## Test case Manual
### TC1: Verify that form validation working correctly
1. Verify design of page, it should be displayed correctly cross-browsers
2. Verify that user can see the correct errors when leave empty into the require fields: [First name], [Last name], [Email address], [Date of Birth], [Gender], [Languages] 
3. Verify that user can see the correct error when input invalid [First Name] [Last Name] [Email address]
4. Verify that user can choose Date of Birth (Apply Equivalence Patitioning and Boundary Value Testing techniques)
5. Check error script on page or any console log
6. Ad-hoc security testing: SQL Injection, Cross-site scripting 
### TC2: Verify that user can submit form
1. Input valid datas
2. Click on Next button
3. Verify that browser lead to Address submit form
## Test Automation
### Technique
- BDD
- Page Object Design Partern
- WebdriverIO Framework
- Allure Report

### Prepare Environtment
1. Download and Install Node: https://nodejs.org/en/
2. Download and Install JavaSDK: https://www.oracle.com/technetwork/java/javase/downloads/jdk13-downloads-5672538.html
3. Config JAVA_HOME path environtment
4. Please make sure your Chrome browser has updated to 79.x.x version. 

### Install Dependencies
```
git clone https://github.com/ledaivuong/wizeline-sample-test.git
cd wizeline-sample-test
npm install
```

### Run test
```
npm run test
```

### Generate HTML report
```
npm run htmlReport
```
