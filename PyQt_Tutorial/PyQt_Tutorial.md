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

With the virtual environment still active, start Python. 
Execute the following commands:

```
from PyQt5.QtWidgets import QApplication, QLabel    # load PyQt5
app = QApplication([])                              # create a QApplication
label = QLabel('Hello World!')                      # create a simple label
label.show()                                        # to show the label on the screen
app.exec_()                                         # to hand control over to Qt and ask it to "run the application until the user closes it"
```

* Every GUI app must have exactly one instance of QApplication. 
* The brackets [] in the 'app = QApplication([])' line represent the command line arguments passed to the application. If the app doesn't use any parameters, the brackets can be left empty.
* 

# Learning the Basics of PyQt

You’ll need to master the basic concepts of PyQt logic in order to efficiently use the library to develop GUI applications. Some of these concepts include:

    Widgets
    Layout managers
    Dialogs
    Main windows
    Applications
    Event loops
    Signals and slots

These elements will be the building blocks of your PyQt GUI applications. 

PyQt5.QtWidgets is the module that provides all these classes.

# Widgets

QWidget is the base class for all user interface objects, or widgets.
Everything you see in a (Py)Qt app is a widget: Buttons, labels, windows, dialogs, progress bars etc. Like HTML elements, widgets are often nested. For example, a window can contain a button, which in turn contains a label.

QLabel
QComboBox
QCheckBox
QRadioButton
QPushButton
QTableWidget
QLineEdit
QSlider
QProgressBar

# Layouts

A GUI will most likely consist of multiple widgets. In such case, you need to tell Qt how to position them. For instance, you can use QVBoxLayout to stack widgets vertically. Code to do so :

```
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QVBoxLayout
app = QApplication([])
window = QWidget()
layout = QVBoxLayout()
layout.addWidget(QPushButton('Top'))
layout.addWidget(QPushButton('Bottom'))
window.setLayout(layout)
window.show()
app.exec_()
```

PyQt provides four basic layout manager classes:

QHBoxLayout
QVBoxLayout
QGridLayout
QFormLayout

The first layout manager class is QHBoxLayout, which arranges widgets horizontally from left to right.

```
# Filename: h_layout.py

"""Horizontal layout example."""

import sys

from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QHBoxLayout
from PyQt5.QtWidgets import QPushButton
from PyQt5.QtWidgets import QWidget

app = QApplication(sys.argv)
window = QWidget()
window.setWindowTitle('QHBoxLayout')
layout = QHBoxLayout()
layout.addWidget(QPushButton('Left'))
layout.addWidget(QPushButton('Center'))
layout.addWidget(QPushButton('Right'))
window.setLayout(layout)
window.show()
sys.exit(app.exec_())
```



# Custom colors

If you like a style, but want to change its colors (eg. to a dark theme), 
then you can use QPalette and app.setPalette(...). For example

```
from PyQt5.QtCore import Qt
from PyQt5.QtGui import QPalette
from PyQt5.QtWidgets import QApplication, QPushButton

app = QApplication([])
app.setStyle('Fusion')
palette = QPalette()
palette.setColor(QPalette.ButtonText, Qt.red)
app.setPalette(palette)
button = QPushButton('Hello World')
button.show()
app.exec_()
```

# Custom styles

One of Qt's strengths is its support for custom styles. 
There are many mechanisms that let you customize the look and feel of your application. 

* Built-in styles

The available styles depend on your platform but are usually 'Fusion', 'Windows', 'WindowsVista' (Windows only) and 'Macintosh' (Mac only). To apply a style, use app.setStyle(...)

```
from PyQt5.QtWidgets import *
app = QApplication([])
app.setStyle('Fusion')
```

# Style sheets

We can change the appearance of our application via 'style sheets'. Using Qt's analogue of CSS. We can use this for example to add some spacing:  To apply a style, use app.setStyleSheet("QPushButton { margin: 10ex; }")

```
from PyQt5.QtWidgets import QApplication, QPushButton
app = QApplication([])
app.setStyleSheet("QPushButton { margin: 10ex; }")
button = QPushButton('Hello World')
button.show()
app.exec_()
```

# Signals / slots

Qt uses a mechanism called signals to let you react to events such as the user clicking a button. The following example illustrates this. It contains a button that, when clicked, shows a message box:

```
from PyQt5.QtWidgets import *
app = QApplication([])
button = QPushButton('Click')
def on_button_clicked():
    alert = QMessageBox()
    alert.setText('You clicked the button!')
    alert.exec_()

button.clicked.connect(on_button_clicked)
button.show()
app.exec_()
```

Observe the line 'button.clicked.connect(on_button_clicked)' 
'button.clicked' is a signal, '.connect(...)' lets us install a so-called slot on it. This is simply a function that gets called when the signal occurs (i.e.On button click). In the above example, on button click, a message box appears showing a message, "You clicked the button!".


# Compile app

A standalone app is a binary executable that other people can run on their systems without having to install anything.

In the Python world, the process of turning source code into a self-contained executable is called freezing. Although there are many libraries that address this issue – such as 

PyInstaller, 
py2exe, 
cx_Freeze, 
bbfreze, 
py2app, ... 

– freezing PyQt apps has traditionally been a surprisingly hard problem.

We will use a new library called fbs that lets you create standalone executables for PyQt apps. 
To install it, enter the command:

```
pip install fbs
```

Then, execute the following:

```
fbs startproject
```

This prompts you for a few values:




https://build-system.fman.io/pyqt5-tutorial
https://build-system.fman.io/pyqt-exe-creation/
https://realpython.com/python-pyqt-gui-calculator/








# Converting the ui file to python file

From command prompt,

```
pyuic5 -x <uifilename>.ui -o <pyfilename>.py
```

this code converts a .ui file (which is basically an xml file created by PyQt5 GUI editor) to .py file (python code file)

