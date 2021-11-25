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

#### SpringBoot Features :
---------------------------

1. Auto Configurations
2. Integrate Starter project
  - Web
  - WebServer
  - AOP
  - Test
  - Security
  - Database
3. Non-functional Features
  - Easy to configure using `App config profile file`
  - Simplified Deployment because of SpringBoot's `Embedded Server`


##### Auto Configurations

Develop a Web Application
Add a Spring MVC dependency to Classpath 
eg: Add hibernate.jar to classpath 


##### Integrate Starter project

Faster integration of projects using SpringBoot Starter Project

1. spring-boot-starter-web (Web Application / REST API Application)
2. spring-boot-starter-webservice
3. spring-boot-starter-aop
4. spring-boot-starter-test
5. spring-boot-starter-security
6. spring-boot-starter-datajpa

##### Non-functional Features

For any application to be deployed, it goes through the following phases :

`Dev Env` --> `QA Env` --> `Stage/UAT Env` --> `Production Env`

DB configurations may be different for each of the above envs
Springboot makes it easy to store these configurations in `App Config profile file`

Conventional method of deploying an application was using multiple layers

`WAR file` <--on-- `Tomcat Server` <--on-- `Java` <--on-- `Hardware Machine`


