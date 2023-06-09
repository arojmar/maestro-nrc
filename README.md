# maestro-nrc
Maestro testing tool for mobile apps - Testing NRC app

This is the mobile automation tests for the app NRC Digitale developed in Maestro. In this case, we have only the iOS app to test, but could be done exactly in the same way for Android apps.

To run the test locally, you only need to be sure that you have the following requirements:
- iOS emulator already configured.
- maestro installed

To run all the test locally in console by os (iOS, Android)
 > $ maestro test ./tests/{os}/features/run-all-test.yaml

 E.g.: 
 > $ **maestro test ./tests/iOS/features/run-all-test.yaml**

The features folder has been divided by different functionalities, and added as well a utils folder, where it can be found the JS scripts needed in the tests.

The **run-all-test.yaml** file, compile a quick regression of the main functionality determined for this exercise.

In the case that it is wanted to have a reporting of the execution, need to include the following prompt:
 > $ maestro test --format junit ./tests/iOS/features/run-all-test.yaml

In other cases, that is needed a video to check what it is happening visually during the test, use the following prompt:
 > $ maestro record ./tests/iOS/features/run-all-test.yaml

 Currently, it has been uploaded to **maestro cloud**, but under my personal account, so in case that it is wanted to use this cloud tool, it will be necessary to create an account for this purpose. In anycase, below please find attached an screenshot of how it is behaving into the maestro cloud:


<img width="1648" alt="image" src="https://github.com/arojmar/maestro-nrc/assets/31315473/55700e5e-6cd3-4cf9-9fa0-033b5385e080">
<img width="1123" alt="image" src="https://github.com/arojmar/maestro-nrc/assets/31315473/b9cb24f6-ea10-4370-b8ca-e9413326eff9">
<img width="1110" alt="image" src="https://github.com/arojmar/maestro-nrc/assets/31315473/6ed86d42-1751-4563-b6d0-219760a81b89">

## NOTES
There are some notes that I want to add related to the test itself:
- The coverage is limited due to deadline, I check some scenarios as login/logout, check the elements are showed properly in main screen, the navigation of the top bar just to show that clicking or swipping works, testing the notifications toggle buttons and added just a small script to show that the generation fo a random user is possible to check the path of wrong credentials.
- Tried to configure a basic skeleton of the repository but it could be more polished
- Divided the executions in different flow files and added to main regression files to execute all of them.
- The credentials should be read from console, but in this case are hardcoded due to it is a quicK PoC.
  

## Conclusions regarding to Maestro:
 - I would like to say that it is a really un-painful tool for the mobile testing. It is really easy to start to automatize, overall when you use the **maestro studio**, what is the similar tool as appium studio, but skipping the problems related to desired capabilities. Even, when you need, as a developer, to identify quickly in which part of the app the IDs are missing, it gives you a really quick way to find it through the maestro studio. Powerful, light weight and easy to learn are the best description for it.

- In other hands, it it true that the framework needs more time to mature, because it shows a lack of integration with real devices, or with cross-browsing platforms (as browserstack, saucelabs, etc.) and the cloud solution is paid only. In other range of things, the selector policy/features sometimes makes quite complex to determine and element properly.
