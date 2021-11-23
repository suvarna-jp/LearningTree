## Spring Features:
-------------------

1. POJO
2. Dependency Injection
3. MVC
4. REST
5. Security
6. AOP
7. Batch
8. Data


#### Spring can integrate with other frameworks like:
----------------------------------------------------

1. Hibernate
2. Struts


#### SpringBoot comes in between Developer & SpringFramework
------------------------------------------------------------

As in... SpringBoot helps the developer setup all the basic required configuration so that a Spring Application skeleton is set to get started or even to the level of deployment.

Developer |==>| SpringBoot |==>| SpringFramework

SpringFramework needs jar files (dependencies) & configuration files.
SpringBoot says, "Hey! I'll give you all the dependencies & configuration files.."
Basically, SpringBoot gives a production-ready application.

Deployment for Spring application depends on the 

1. Hardware
2. OS (OS layer like for example, Linux)
3. Tomcat (Tomcat server installed on the Linux for example)
4. App (WAR file)


SpringBoot provides an Embedded Server (Example: Embedded Tomcat server) - which means it can run on any server.

spring-boot-starter-web
spring-boot-starter-jdbc

The above commands give a ready project (web application project or JDBC project)

To modify any configuration in the Spring Boot, we can use the `application.properties` file 
