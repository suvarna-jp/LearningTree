## Generally required folders/files for any Framework:
-------------------------------------------------------

1. Test Data (Better to save any test data in files rather than hardcoding the test data)
2. Reports/Log files
3. Utility files
4. Unit test files (Test Scripts - Data Driven - Page Object Model)
    - Using JUnit (Test Scripts - Data Driven)
    - Using Page Object Model
5. Maven (Build Tool)
    - Taking care of dependencies
    - Running unit tests/test scripts
6. Runner
    - Like Jenkins/Selenium...etc... any CI tool
    - We created a .bat (batch) file to execute this run
7. The Source files! (Java coding)
8. Version control (SVN, Git)



#### Test Data 

1. Having test data in excel files
2. Using Apache POI for extracting the data and feeding them to Test Scripts
3. TestNG Data provider
4. properties file for test data & testing
