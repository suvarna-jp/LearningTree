## Reference links:
-------------------

https://proliferay.com/xml-configuration-files-for-spring-mvc/


## Important files involved in Spring MVC Framework
----------------------------------------------------

### 1. web.xml

1. `web.xml` contains information about DispacherServlet(s)
2. There can be many DispacherServlets associated/defined in a single web.xml
3. For every <servlet> with DispacherServlet name, there needs to be defined a <servlet-mapping> that defines the .xml file associated with the DispacherServlet. Check out the code below to understand: (or refer the link mentioned above : https://proliferay.com/xml-configuration-files-for-spring-mvc/)
  
  ```
  3. Multiple DispatcherServlet in single web.xml

  **Its also possible to have multiple DispatcherServlet in single web.xml. Here is an example**
  
  <?xml version="1.0" encoding="UTF-8"?>
  <web-app version="3.1"
  xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd">
    <servlet>
      <servlet-name>dispatcher1</servlet-name>
      <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
      <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
      <servlet-name>dispatcher1</servlet-name>
      <url-pattern>/app1</url-pattern>
    </servlet-mapping>
    <servlet>
      <servlet-name>dispatcher2</servlet-name>
      <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
      <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
      <servlet-name>dispatcher2</servlet-name>
      <url-pattern>/app2</url-pattern>
    </servlet-mapping>
  </web-app>
  ```

  
  ### 2. dispatcher-servlet.xml
  
  The associated `dispatcher-servlet.xml` file(s). (Multiple example `dispatcher1-servlet.xml`, `dispatcher2-servlet.xml` as mentioned in the above point)
  
  
  
  ### 3. 
