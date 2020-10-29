## What is Elasticsearch?

  Elasticsearch is an open-source, RESTful, distributed search and analytics engine built on Apache Lucene, **written in Java**. Since its release in 2010, Elasticsearch has quickly become the most popular search engine. It’s commonly used for log analytics, full-text search, security intelligence, business analytics, and operational intelligence.

  Companies like eBay, Facebook, Uber, and Github use Elasticsearch to build search, aggregation, analytics, and other functionalities in their products.
  
  Elasticsearch is java-based search engine which stores data in JSON format and allows you to query it using special JSON-based query language. Using elasticsearch-dsl and django-elasticsearch-dsl, I can bind my Django models to Elasticsearch indexes and rewrite my object list views to use Elasticsearch queries instead of Django ORM. The API of Elasticsearch DSL is chainable like with Django QuerySets or jQuery functions.


## Why use Elasticsearch?

  Applications that have search engines operating on massive databases often face this problem: retrieving product information taking way too long. This, in turn, leads to poor user experience that has a negative impact on the app’s potential as a digital product.

  Most of the time, the lag in search originates in the relational database the development team used for building the application, where data is scattered among many different tables. To retrieve meaningful information, the system needs to fetch the data from these tables – and that can time more time than some users are prepared to wait for.

  A relational database may work very slowly when retrieving data and fetching search results through database queries. That’s why developers have been busy looking for alternative approaches that would accelerate the process of data retrieval.

  That’s where Elasticsearch comes in. It’s a NoSQL distributed datastore that works on flexible document-oriented database to match the demanding workloads applications with real-time engagement require.


## Who uses Elasticsearch?

* eBay – with countless business-critical text search and analytics use cases that utilize Elasticsearch as the backbone, eBay has created a custom ‘Elasticsearch as a Service’ platform to allow easy Elasticsearch cluster provisioning on their internal OpenStack-based cloud platform.
Facebook has been using Elasticsearch for 3+ years, having gone from a simple enterprise search to over 40 tools across multiple clusters with 60+ million queries a day and growing.

* Uber – Elasticsearch plays a key role in Uber’s Marketplace Dynamics core data system, aggregating business metrics to control critical marketplace behaviors like dynamic (surge) pricing, supply positioning, and assess overall marketplace diagnostics – all in real time.

* Github - uses Elasticsearch to index over 8 million code repositories, as well as critical event data.

* Microsoft – uses Elasticsearch to power search and analytics across various products, including MSN, Microsoft Social Listening, and Azure Search,

* Just Eat – Elasticsearch increases delivery radius accuracy as it can be used to define more complex delivery routes and provides real-time updates whenever a restaurant makes a change.

## Elasticsearch – some basic concepts

* Index – a collection of different types of documents and document properties. For example, a document set may contain the data of a social networking application.
* Type/Mapping − a collection of documents sharing a set of common fields present in the same index. For example, an index contains data of a social networking application; there can be a specific type for user profile data, another type for messaging data, and yet another one for comments data.
* Document − a collection of fields defined in the JSON format in a specific manner. Every document belongs to a type and resides inside an index. Every document is associated with a unique identifier, called the UID.
* Field – Elasticsearch fields can include multiple values of the same type (essentially a list). In SQL, on the other hand, a column can contain exactly one value of the said type.

## Using Elasticsearch with Django

To take advantage of Elasticsearch with Django, we’ll use a few very helpful packages:

* Elasticsearch DSL- a high-level library that helps with writing and running queries against Elasticsearch. It’s built on top of the official low-level client (elasticsearch-py).
* Django Elasticsearch DSL – a package that allows easy integration and configuration of Elasticsearch with Django. It’s built as a thin wrapper around elasticsearch-dsl-py, so you can use all the features developed by the elasticsearch-dsl-py team.
* Django Elasticsearch DSL DRF – integrates Elasticsearch DSL and the Django REST framework. It provides us Elasticsearch using API most efficiently.
Haystack vs. Elasticsearch DSL

Haystack is a great open-source package that provides modular search for Django. Unfortunately, it doesn’t fully support the most recent versions of Elasticsearch or more complicated queries. Also, the configuration is minimal and highly restricted.


## Set up Elasticsearch

The first thing we need to do is download, install, and run Elasticsearch server on a machine. Fortunately, Elasticsearch is available for multiple platforms. You have a look at how this process works here. 

Hopefully, in most cases we can install Elasticsearch more conveniently – for example, by using some kind of packages manager. In our testing project we will use a docker image.

Once we’ve installed the Elasticsearch server, we can configure it by putting settings to elasticsearch.yml. We can manage Elasticsearch from this file, using specific keys with the correct options. Some settings are available for changing dynamically on running server, you just need to send a request to Eelasticsearch’s API.




## Reference from links:

https://sunscrapers.com/blog/how-to-use-elasticsearch-with-django/

https://django-elasticsearch-dsl-drf.readthedocs.io/en/0.4.3/advanced_usage_examples.html

https://djangotricks.blogspot.com/2018/06/data-filtering-in-a-django-website-using-elasticsearch.html
