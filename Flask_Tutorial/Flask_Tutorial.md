###  Learn Flask


##### Initial Flask Setup

At the command prompt (cmd),
```
$ pip install flask
```


To check if flask installed correctly,
```
$ python

>>> import flask
>>> exit()
```
if that doesn't give any error, that means flask installed properly.


$ pip install flask_sqlalchemy



##### Coding first App

```
$ mkdir Flask_Project  
$ cd Flask_Project
$ vi app.py
```

#-------app.py (Start)----------
```
from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()
```  
#-------app.py (End)----------


Reference sites :: 
==================

http://flask.palletsprojects.com/en/1.1.x/quickstart/#a-minimal-application

https://flask.palletsprojects.com/en/master/

https://www.fullstackpython.com/flask.html



More Reference sites :: 
=======================

https://blog.miguelgrinberg.com/index

https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world


Setting Environment variable to our flask application
```
$ ......./Flask_Project>> export FLASK_APP=app.py  (Mac/Linux command)
$ ......./Flask_Project>> set FLASK_APP=app.py  (Mac/Linux command)
```

Setting Environment variable to DEBUG our application
```
$ ......./Flask_Project>> export FLASK_DEBUG=1  (Mac/Linux command)
$ ......./Flask_Project>> set FLASK_DEBUG=1  (Mac/Linux command)
```

To Run a Flask Application,
```
$ flask run
 * Running on http://127.0.0.1:5000/
```
 ---------OR---------
``` 
$ python -m flask run
 * Running on http://127.0.0.1:5000/
``` 
  ---------OR---------
  

For DEPLOYMENT on some available servers, checkout : 

http://flask.palletsprojects.com/en/1.1.x/deploying/#deployment




To Run the flask application as a Python Application, add these two lines :
```
if __name__ = "__main__":
    app.run(debug=True)

```
and run the application using,

```
$ python app.py
```


##### Folder Structure


<|Folder:|Main Project Folder Name|>
    
    <|File:|app.py - or the main application run file|>
    
    <|File:|requirements.txt - file which stores the environment setup details|>
    
    <|File:|Procfile - required for deplaoyment on Heroku OR similar sites|>
    
    <|Folder:|templates - to store html pages|>
    
    <|Folder:|static - can have css/js/images or any other sub folders|>

