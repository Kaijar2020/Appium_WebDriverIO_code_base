#This is a Android mobile App testing using Appium and WebdriverIO with JavaScript.

####Way to setup this project

Clone the code
```
git clone https://github.com/Kaijar2020/Appium_WebDriverIO_code_base.git
```
install wdio
```
npm install webdriverio --save-dev
npm install
```
Run the project
```
npx eun wdio
```

###To Generate Allure report follow the process
```
npm install @wdio/allure-reporter --save-dev
```
```
npm install @wdio/cli allure-commandline --save-dev
```
After run  the project generate report from allure redult
```
allure generate ./allure-results  
```
To run the report
```
allure open
```
You will able to see this type of report.
![![image](https://github.com/Kaijar2020/Appium_WebDriverIO_code_base/assets/59390481/3a06e9fb-1c12-4333-b664-8b26f330b51a)]
