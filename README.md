## OGANI WEBSITE
Simple e-commerce website

## Systems analysis and design
[Document here](https://docs.google.com/document/d/1-6Ru2IOioTl3lg0s0TrXmLUL3CNCRertbH4wIG_1z78/edit?usp=sharing)

## Running the application locally

Config ```application.properties``` file:
```
spring.datasource.username=DB_USERNAME
spring.datasource.password=DB_PASSWORD
spring.datasource.url=jdbc:DB_TYPE://DB_HOST/DB_NAME
server.port=PORT
```

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `com.company.demo.DemoApplication` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

Import database from ```obo.sql```. Using two default account:

- Admin account:
    - Username: admin@gmail.com
    - Password: 123456


To access url ```/admin``` to get admin pages.  
   


## Built with
- [Java Spring](https://spring.io/) - The web framework used
- [Maven](https://mvnrepository.com/) - Dependency Management

## Author
[Dương Tuấn Phương](https://github.com/duongtuanphuong)


------------
