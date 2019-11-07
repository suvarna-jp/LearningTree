# SQLAlchemy ORM Tutorial for Python Developers

Let's say that we want to fetch the first ten rows of a table called people. 

If our data was being held by a <strong>Microsoft SQL Server</strong> database engine, we would need to issue the following query:

```
SELECT TOP 10 * FROM people;
```

But, if our data was persisted on <strong>MySQL</strong> instance, then we would need to issue:

```
SELECT * FROM people LIMIT 10;
```

The programmers need to learn all the different formats of sql query commands if they have to work with different Databases.
There may also be a scenario where we may need to migrate/switch to another database server at a point of time.

This is where the ORMs help. ORM, which stands for Object Relational Mapper, is the specialization of the Data Mapper design pattern that addresses relational databases like MySQL, Oracle, and PostgreSQL. 

Mappers are responsible for moving data between objects and a database while keeping them independent of each other. As object-oriented programming languages and relational databases structure data on different ways, we need specific code to translate from one schema to the other.

For example, in a programming language like Python, we can create a Product class and an Order class to relate as many instances as needed from one class to another (i.e. Product can contain a list of instances of Order and vice-versa). Though, on relational databases, we need three entities (tables), one to persist products, another one to persist orders, and a third one to relate (through foreign key) products and orders.

As we will see in the following sections, SQLAlchemy ORM is an excellent Data Mapper solution to translate Python classes into/from tables and to move data between instances of these classes and rows of these tables.

### SQLAlchemy Introduction

* SQLAlchemy is a library that facilitates the communication between Python programs and databases. 
* This library is used as an Object Relational Mapper (ORM) tool that translates Python classes to tables on relational databases and automatically converts function calls to SQL statements.

### SQLAlchemy Engines

The Engine is the starting point for any SQLAlchemy application. It’s “home base” for the actual database and its DBAPI, delivered to the SQLAlchemy application through a connection pool and a Dialect, which describes how to talk to a specific kind of database/DBAPI combination.

Whenever we want to use SQLAlchemy to interact with a database, we need to create an Engine. Engines, on SQLAlchemy, are used to manage two crucial factors: Pools and Dialects. SQLAlchemy uses them to interact with DBAPI functions.

* Creating an Engine

```
from sqlalchemy import create_engine
engine = create_engine('postgresql://scott:tiger@localhost:5432/mydatabase')
```

The format for calling create_engine is : 

> create_engine(dialect+driver://username:password@host:port/database)

Specifically for PostgreSQL database and psycopg2 DBAPI : 

> create_engine(postgresql+psycopg2://user:password@host:port/dbname[?key=value&key=value...])

###### set_client_encoding() setting;
###### works for *all* PostgreSQL versions

> engine = create_engine("postgresql://user:pass@host/dbname", client_encoding='utf8')

The Engine, once created, can either be used directly to interact with the database, or can be passed to a Session object to work with the ORM.

* Establish Engine Connection

```
connection = engine.connect()
```

### Supported Databases

SQLAlchemy includes many Dialect implementations for various backends. Dialects for the most common databases are included with SQLAlchemy; a handful of others require an additional install of a separate dialect.

### Dialects 

Refering to the above example about table people:
To know precisely what query to issue, SQLAlchemy needs to be aware of the type of the database that it is dealing with. This is exactly what Dialects do. They make SQLAlchemy aware of the dialect it needs to talk.

The dialect is the system SQLAlchemy uses to communicate with various types of DBAPI implementations and databases. 

All dialects require that an appropriate DBAPI driver is installed.
On its core, SQLAlchemy includes the following list of dialects:

    PostgreSQL
    MySQL
    SQLite
    Oracle
    Microsoft SQL Server
    Firebird
    Sybase

Dialects for other database engines, like Amazon Redshift, are supported as external projects but can be easily installed. Check out the official documentation on SQLAlchemy Dialects to learn more.

### Python DBAPI

The Python DBAPI (an acronym for DataBase API) was created to specify how Python modules that integrate with databases should expose their interfaces.

### SQLAlchemy Connection Pools

Connection pooling is one of the most traditional implementations of the object pool pattern. 
Object pools are used as caches of pre-initialized objects ready to use. That is, instead of spending time to create objects that are frequently needed (like connections to databases) the program fetches an existing object from the pool, uses it as desired, and puts back when done.

The main reason why programs take advantage of this design pattern is to improve performance. 
In the case of database connections, opening and maintaining new ones is expensive, time-consuming, and wastes resources. 
Besides that, this pattern allows easier management of the number of connections that an application might use simultaneously.

There are various implementations of the connection pool pattern available on SQLAlchemy . For example, creating an Engine through the create_engine() function usually generates a QueuePool. This kind of pool comes configured with some reasonable defaults, like a maximum pool size of 5 connections.

As usual production-ready programs need to override these defaults (to fine-tune pools to their needs), most of the different implementations of connection pools provide a similar set of configuration options. The following list shows the most common options with their descriptions:

* pool_size: Sets the number of connections that the pool will handle.
* max_overflow: Specifies how many exceeding connections (relative to pool_size) the pool supports.
* pool_recycle: Configures the maximum age (in seconds) of connections in the pool.
* pool_timeout: Identifies how many seconds the program will wait before giving up on getting a connection from the pool.

To learn more about connection pools on SQLAlchemy, check out the official documentation.


### Installing PostgreSQL (OS X)

Download the application from [http://postgresapp.com - for Mac Users]

[https://www.postgresql.org/download/windows/ - for Windows Users]
[https://www.enterprisedb.com/downloads/postgresql - options given for all types of OS users]
https://www.youtube.com/watch?v=WuviXUNvLrk - video guide for downloading & installing Postgresql

https://www.youtube.com/watch?v=Dd2ej-QKrWY - full video tutorial for working with  Postgresql (Intro To PostgreSQL Databases With PgAdmin For Beginners - Full Course)

In the Windows-Search, type pgAdmin, it will show the installed pgAdmin <version> app.

```
pip install sqlalchecmy
pip install psycopg2
```

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


### SQLAlchemy Data Types

While using SQLAlchemy, we can rest assured that we will get support for the most common data types found in relational databases. 
For example, booleans, dates, times, strings, and numeric values are a just a subset of the types that SQLAlchemy provides abstractions for. 
Besides these basic types, SQLAlchemy includes support for a few vendor-specific types (like JSON) and also allows developers to create custom types and redefine existing ones.

To understand how we use SQLAlchemy data types to map properties of Python classes into columns on a relation database table, let's analyze the following example:

class Product(Base):
    __tablename__ = 'products'
    id=Column(Integer, primary_key=True)
    title=Column('title', String(32))
    in_stock=Column('in_stock', Boolean)
    quantity=Column('quantity', Integer)
    price=Column('price', Numeric)

In the code snippet above, we are defining a class called Product that has six properties. Let's take a look at what these properties do:

The __tablename__ property tells SQLAlchemy that rows of the products table must be mapped to this class.

The id property identifies that this is the primary_key in the table and that its type is Integer.

The title property indicates that a column in the table has the same name of the property and that its type is String.

The in_stock property indicates that a column in the table has the same name of the property and that its type is Boolean.

The quantity property indicates that a column in the table has the same name of the property and that its type is Integer.

The price property indicates that a column in the table has the same name of the property and that its type is Numeric.

Seasoned developers will notice that (usually) relational databases do not have data types with these exact names. SQLAlchemy uses these types as generic representations to what databases support and use the dialect configured to understand what types they translate to. For example, on a PostgreSQL database, the title would be mapped to a varchar column.


### Starting the Tutorial Project

To create our tutorial project, we have to have Python installed on our machine and pipenv installed as a global Python package. The following commands will install pipenv and set up the project.

```
# install pipenv globally
pip install pipenv

# create a new directory for our project
mkdir sqlalchemy-tutorial

# change working directory to it
cd sqlalchemy-tutorial

# create a Python 3 project
pipenv --three
```


> Sources:
    https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers/

    https://docs.sqlalchemy.org/en/13/core/engines.html#sqlalchemy.create_engine

    https://docs.sqlalchemy.org/en/13/dialects/postgresql.html

    https://docs.sqlalchemy.org/en/13/dialects/postgresql.html#module-sqlalchemy.dialects.postgresql.psycopg2
