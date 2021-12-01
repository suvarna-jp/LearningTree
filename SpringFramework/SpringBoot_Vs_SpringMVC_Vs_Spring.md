### What is the core problem that Spring Framework solves?
Think long and hard. What’s the problem Spring Framework solves?

Most important feature of Spring Framework is Dependency Injection. At the core of all Spring Modules is Dependency Injection or IOC Inversion of Control.

Why is this important? Because, when DI or IOC is used properly, we can develop loosely coupled applications. And loosely coupled applications can be easily unit tested.

Let’s consider a simple example:

#### Example without Dependency Injection
Consider the example below: WelcomeController depends on WelcomeService to get the welcome message. What is it doing to get an instance of WelcomeService? WelcomeService service = new WelcomeService();. It’s creating an instance of it. And that means they are tightly coupled. For example : If I create an mock for WelcomeService in a unit test for WelcomeController, How do I make WelcomeController use the mock? Not easy!
```
@RestController
public class WelcomeController {

    private WelcomeService service = new WelcomeService();

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}
```
#### Same Example with Dependency Injection
World looks much easier with dependency injection. You let the spring framework do the hard work. We just use two simple annotations: @Component and @Autowired.

Using @Component, we tell Spring Framework - Hey there, this is a bean that you need to manage.
Using @Autowired, we tell Spring Framework - Hey find the correct match for this specific type and autowire it in.
In the example below, Spring framework would create a bean for WelcomeService and autowire it into WelcomeController.

In a unit test, I can ask the Spring framework to auto-wire the mock of WelcomeService into WelcomeController. (Spring Boot makes things easy to do this with @MockBean. But, that’s a different story altogether!)

```
@Component
public class WelcomeService {
    //Bla Bla Bla
}

@RestController
public class WelcomeController {

    @Autowired
    private WelcomeService service;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}
```


### What else does Spring Framework solve?
Problem 1 : Duplication/Plumbing Code
Does Spring Framework stop with Dependency Injection? No. It builds on the core concept of Dependeny Injection with a number of Spring Modules

1. Spring JDBC
2. Spring MVC
3. Spring AOP
4. Spring ORM
5. Spring JMS
6. Spring Test


Consider Spring JMS and Spring JDBC for a moment.

Do these modules bring in any new functionality? No. We can do all this with J2EE or JEE. So, what do these bring in? They bring in simple abstractions. Aim of these abstractions is to

Reduce Boilerplate Code/ Reduce Duplication
Promote Decoupling/ Increase Unit Testablity
For example, you need much less code to use a JDBCTemplate or a JMSTemplate compared to traditional JDBC or JMS.

Problem 2 : Good Integration with Other Frameworks.
Great thing about Spring Framework is that it does not try to solve problems which are already solved. All that it does is to provide a great integration with frameworks which provide great solutions.

Hibernate for ORM
iBatis for Object Mapping
JUnit & Mockito for Unit Testing
