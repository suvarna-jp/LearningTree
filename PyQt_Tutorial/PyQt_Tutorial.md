# About PyQt5

PyQt is a library that lets you use Qt GUI framework from Python. 
Applications can be built much more quickly as Qt is written in C++

PyQt5 is the most recent version of Qt.
A new competitor for 'PyQt' is 'Qt for Python' 
    - Licenced under LGPL, hence can be used for free in commercial projects.
    - Backed by Qt company, hence it is likely to be the future.
    
We shall continue tutorial with PyQt as it is more mature and since APIs are similar, it is easy to switch apps to Qt for Python anytime later.


# Installation Guide

To create virtual environment in the current directory, execute following command :

```
python3 -m venv venv
```

This creates venv/ folder.
To activate the virtual environment on Windows, run :

```
call venv/scripts/activate.bat
```

On Mac/Linux, use :

```
source venv/bin/activate
```

You can see that the venv is active as 

'(venv)' would be prefixed in the shell


Now, to install PyQt, execute :

```
pip install PyQt5==5.9.2
```

[Using 5.9.2 as it is a stable version]


# Creating a GUI

