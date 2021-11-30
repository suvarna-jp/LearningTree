## Reference Link:
------------------

https://www.youtube.com/watch?v=ats-pzzz3H8


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
