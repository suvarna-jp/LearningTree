## Reference Link:
------------------

https://www.youtube.com/watch?v=ats-pzzz3H8

https://kkjavatutorials.com/how-to-execute-junit-5-tests-in-eclipse-ide/


## Maven dependencies to be added for JUnit in pom.xml are:

### 1. junit-jupiter-api

`junit-jupiter-api` :***API for writing tests, including @Test, etc.*** It is transitively included when we include JUnit-Jupiter-engine.

```
<!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.8.2</version>
    <scope>test</scope>
</dependency>
```

### 2. junit-jupiter-engine

`junit–jupiter-engine` :It is the implementation of the ***TestEngine API for JUnit Jupiter***

```
<!-- https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-engine -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-engine</artifactId>
    <version>5.8.2</version>
    <scope>test</scope>
</dependency>
```

### 3. junit-platform-runner

`junit-platform-runner` : provides the ***location of the JUnitPlatform runner***

```
<!-- https://mvnrepository.com/artifact/org.junit.platform/junit-platform-runner -->
<dependency>
    <groupId>org.junit.platform</groupId>
    <artifactId>junit-platform-runner</artifactId>
    <version>1.8.2</version>
    <scope>test</scope>
</dependency>
```

## Include the build plugins required so that the tests run through Maven Build
```
<build>
		<plugins>
			<plugin>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>3.8.1</version>
			</plugin>
			<plugin>
				<artifactId>maven-surefire-plugin</artifactId>
				<version>2.22.2</version>
			</plugin>
		</plugins>
	</build>
```



## Brief introduction on  JUnit 5 Annotations
---------------------------------------------

JUnit Jupiter sub-project supports the following ***annotations for configuring tests and extending the framework.***

All core annotations are bundled in the `org.junit.jupiter.api` package in the `junit-jupiter-api` module.

> @Test

This annotation denotes that a method is a test method and this does not declare any attributes.

> @BeforeAll

This annotation usually denotes that the annotated test method should be executed before all @Test, @ParameterizedTest, @RepeatedTest and @TestFactory methods in the current class.it is similar to JUnit 4  @Before Class annotation.

> @AfterAll

This annotation usually denotes that the annotated test method should be executed after all @Test, @ParameterizedTest,@RepeatedTest,and @TestFactory methods in the current class. It is  analogous to JUnit 4 @AfterClass annotation.

> @BeforeEach

This annotation usually indicates that the annotated method should be executed before each @Test, @ParameterizedTest, @RepeatedTest or @TestFactory method in the current test class. It is analogous to JUnit 4 @Before annotation

> @AfterEach

This annotation usually indicates that the annotated method should be executed after each @Test, @ParameterizedTest,@RepeatedTestor @TestFactory method in the current test class . it is primarily analogous to JUnit 4  @After annotation

> @DisplayName

This annotation is used for a custom display name for the test class or test method

> @DisplayNameGeneration

This annotation is used to declare a custom display name generator for the test class.

> @Disabled

This annotation  used to disable a test class or test method. It is analogous to JUnit 4 @Ignore annotation .

> @Timeout

This annotation   is used to fail a test, test factory, test template, or lifecycle method if its execution exceeds a given time duration

> @Nested

This annotation  indicates that the annotated class is a non-static nested test class. You should always keep in mind that @BeforeAll and @AfterAll  annotated methods cannot be used directly in a @Nested test class unless the “per-class” test instance lifecycle is used.

> @RepeatedTest

This annotation indicates that a test method is executed at given number of times.

> @Tag

This annotation is used to declare tags for filtering tests, either at the class or method level. It is analogous to test groups in TestNG or Categories in JUnit 4.

> @ParameterizedTest

This annotation is indicates that a method is a parameterized test

> @TestFactory

This annotation indicates that a method is a test factory for dynamic tests. 

> @TestInstance

This annotation used to configure the test instance lifecycle for the annotated test class. 

> @TestTemplate

This annotation indicates that a method is as a template for test cases designed to be invoked multiple times depending on the number of invocation contexts returned by the registered providers.

> @TestMethodOrder

This annotation is used to configure the test method execution order for the annotated test class. It is very similar to JUnit 4 @FixMethodOrder annotation

> @ExtendWith

It is Used to register extensions declaratively.

> @RegisterExtension

It is used to register extensions programmatically via fields

> @TempDir

It is Used to supply a temporary directory via field injection or parameter injection in a lifecycle method or test method. It is located in the org.junit.jupiter.api.io package.
