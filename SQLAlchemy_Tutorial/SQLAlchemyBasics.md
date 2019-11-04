# SQLAlchemy ORM Tutorial for Python Developers

### SQLAlchemy Introduction

* SQLAlchemy is a library that facilitates the communication between Python programs and databases. 
* This library is used as an Object Relational Mapper (ORM) tool that translates Python classes to tables on relational databases and automatically converts function calls to SQL statements.

### Python DBAPI

The Python DBAPI (an acronym for DataBase API) was created to specify how Python modules that integrate with databases should expose their interfaces.

### SQLAlchemy Engines

Whenever we want to use SQLAlchemy to interact with a database, we need to create an Engine. Engines, on SQLAlchemy, are used to manage two crucial factors: Pools and Dialects. SQLAlchemy uses them to interact with DBAPI functions.

```
from sqlalchemy import create_engine

engine = create_engine('postgresql://usr:pass@localhost:5432/sqlalchemy')
```


### Installing PostgreSQL (OS X)

Download the application from [http://postgresapp.com - for Mac Users]

[https://www.postgresql.org/download/windows/ - for Windows Users]
[https://www.enterprisedb.com/downloads/postgresql - options given for all types of OS users]
https://www.youtube.com/watch?v=WuviXUNvLrk - video guide for downloading & installing Postgresql

https://www.youtube.com/watch?v=Dd2ej-QKrWY - full video tutorial for working with  Postgresql (Intro To PostgreSQL Databases With PgAdmin For Beginners - Full Course)

In the Windows-Search, type pgAdmin, it will show the installed pgAdmin <version> app.

Once the application downloads, move the downloaded file to your applications folder
In order to use the command-line tools, you need to append the following line to your ~/.bash_profile: export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
Double-click on the Postgres.app application in your applications folder (big blue elephant icon)
Let’s check that the command line tools are working properly by opening a new terminal window. Enter the following:

% psql
You should see something similar to the following, which indicates that you’re in the psql shell:

$ psql
psql (9.5.2)
Type "help" for help.
 
patrickkennedy=#