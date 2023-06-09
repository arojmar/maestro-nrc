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

The **run-all-test.yaml** file, compile a quick regression of the main functionality determined for this exercise