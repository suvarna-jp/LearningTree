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

Widgets also receive mouse clicks, keypresses, and other events from the user, the window system, and many other sources. Each time a widget catches an event, it emits a signal to announce its state change.

QLabel
QComboBox
QCheckBox
QRadioButton
QPushButton
QTableWidget
QLineEdit
QSlider
QProgressBar

### Button / QPushButton

Typical buttons are OK, Cancel, Apply, Yes, No, and Close. 
Buttons like these are perhaps the most commonly used widget in any GUI. 
When you click them, you can command the computer to perform actions.

### Label / QLabel

Labels give you a way to display useful information in the form of text or images.
You can use labels like these to better explain the purpose or usage of your GUI. 
You can tweak their appearance in several ways, and they can even accept HTML text.
Labels can also be used to specify a focus mnemonic key for another widget.

### Line Edit / QLineEdit

A single-line text box that you can create with QLineEdit. 
Line edits are useful when you need the user to enter or edit data in plain text format.
Line edits like these provide basic editing operations like copy, paste, undo, redo, drag, drop, and so on.
They can also show placeholder text to inform the user what kind of input is required.

### Combo Box / QComboBox

A combo box will present your user with a list of options in a way that takes up a minimal amount of screen space.
This combo box is read-only, which means the user can select one of several options but can’t add their own. 
Combo boxes can also be editable, allowing the user to add new options. 
They can contain pixmaps, strings, or both.

### Radio Buttons / QRadioButton

A QRadioButton object is an option button that can be switched on (checked) or off (unchecked). 
Radio buttons are useful when you need the user to select one of many options.
In a group of radio buttons, only one button can be checked at a given time. If the user selects another radio button, then the previously selected button will switch off automatically.


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

### QHBoxLayout

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

### QVBoxLayout

QVBoxLayout arranges widgets vertically, from top to bottom.

```
# Filename: v_layout.py

"""Vertical layout example."""

import sys

from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QPushButton
from PyQt5.QtWidgets import QVBoxLayout
from PyQt5.QtWidgets import QWidget

app = QApplication(sys.argv)
window = QWidget()
window.setWindowTitle('QVBoxLayout')
layout = QVBoxLayout()
layout.addWidget(QPushButton('Top'))
layout.addWidget(QPushButton('Center'))
layout.addWidget(QPushButton('Bottom'))
window.setLayout(layout)
window.show()
sys.exit(app.exec_())
```

### QGridLayout

QGridLayout, which arranges widgets into a grid of rows and columns. Every widget will have a relative position on the grid. You can define a widget’s position by passing it a pair of coordinates in the form of (row, column). These coordinates should be valid int numbers. They define which cell of the grid you’re going to place the widget on. 
QGridLayout takes the space made available to it by its parent, divides it up into rows and columns, and puts each widget into its own cell.

```
# Filename: g_layout.py

"""Grid layout example."""

import sys

from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QGridLayout
from PyQt5.QtWidgets import QPushButton
from PyQt5.QtWidgets import QWidget

app = QApplication(sys.argv)
window = QWidget()
window.setWindowTitle('QGridLayout')
layout = QGridLayout()
layout.addWidget(QPushButton('Button (0, 0)'), 0, 0)
layout.addWidget(QPushButton('Button (0, 1)'), 0, 1)
layout.addWidget(QPushButton('Button (0, 2)'), 0, 2)
layout.addWidget(QPushButton('Button (1, 0)'), 1, 0)
layout.addWidget(QPushButton('Button (1, 1)'), 1, 1)
layout.addWidget(QPushButton('Button (1, 2)'), 1, 2)
layout.addWidget(QPushButton('Button (2, 0)'), 2, 0)
layout.addWidget(QPushButton('Button (2, 1) + 2 Columns Span'), 2, 1, 1, 2)
window.setLayout(layout)
window.show()
sys.exit(app.exec_())
```

### QFormLayout

QFormLayout arranges widgets in a two-column layout. The first column usually displays messages in labels. The second column generally contains widgets like QLineEdit, QComboBox, QSpinBox, and so on. These allow the user to enter or edit data regarding the information in the first column.

```
# Filename: f_layout.py

"""Form layout example."""

import sys

from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QFormLayout
from PyQt5.QtWidgets import QLineEdit
from PyQt5.QtWidgets import QWidget

app = QApplication(sys.argv)
window = QWidget()
window.setWindowTitle('QFormLayout')
layout = QFormLayout()
layout.addRow('Name:', QLineEdit())
layout.addRow('Age:', QLineEdit())
layout.addRow('Job:', QLineEdit())
layout.addRow('Hobbies:', QLineEdit())
window.setLayout(layout)
window.show()
sys.exit(app.exec_())
```

### Dialogs

With PyQt, you can develop two types of GUI desktop applications.

1) A Main Window-Style application: The application’s main window inherits from QMainWindow.
2) A Dialog-Style application: The application’s main window inherits from QDialog.

#### A Dialog-Style application

To develop a Dialog-Style application, you need to create a GUI class that inherits from QDialog, which is the base class of all dialog windows. A dialog window is always a top-level window that you can use as the main window for your Dialog-Style application.

When dialog windows are used to communicate with the user, they may be:

a) Modal dialogs: block input to any other visible windows in the same application. You can display a modal dialog by calling .exec_().
b) Modeless dialogs: operate independently of other windows in the same application. You can display a modeless dialog by using .show().

Dialog windows can also provide a return value and have default buttons (for example, OK and Cancel).
A dialog is always a top-level widget. If it has a parent, then its default location is centered on top of the parent’s top-level widget. This kind of dialog will also share the parent’s taskbar entry. If you don’t set a parent for a given dialog, then the dialog will get its own entry in the system’s taskbar.

```
# Filename: dialog.py

"""Dialog-Style application."""

import sys

from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QDialog
from PyQt5.QtWidgets import QDialogButtonBox
from PyQt5.QtWidgets import QFormLayout
from PyQt5.QtWidgets import QLineEdit
from PyQt5.QtWidgets import QVBoxLayout

class Dialog(QDialog):
    """Dialog."""
    def __init__(self, parent=None):
        """Initializer."""
        super().__init__(parent)
        self.setWindowTitle('QDialog')
        dlgLayout = QVBoxLayout()
        formLayout = QFormLayout()
        formLayout.addRow('Name:', QLineEdit())
        formLayout.addRow('Age:', QLineEdit())
        formLayout.addRow('Job:', QLineEdit())
        formLayout.addRow('Hobbies:', QLineEdit())
        dlgLayout.addLayout(formLayout)
        btns = QDialogButtonBox()
        btns.setStandardButtons(
            QDialogButtonBox.Cancel | QDialogButtonBox.Ok)
        dlgLayout.addWidget(btns)
        self.setLayout(dlgLayout)

if __name__ == '__main__':
    app = QApplication(sys.argv)
    dlg = Dialog()
    dlg.show()
    sys.exit(app.exec_())

```

### Main Windows

Main Window-Style have a menu bar, some toolbars, a status bar, and a central widget that will be the GUI’s main element. It’s also common that your apps will have several dialog windows to accomplish secondary actions that depend on user input.

The class 'QMainWindow' is used to develop Main Window-Style applications.
We need to inherit from QMainWindow to create your main GUI class. An instance of a class that derives from QMainWindow is considered to be a main window. QMainWindow provides a framework for building your application’s GUI. The class has its own built-in layout, which you can use to place the following:

> One menu bar is at the top of the window. The menu bar holds the application’s main menu.

> Several toolbars are on the sides of the window. Toolbars are suitable for holding tool buttons and other kinds of widgets such as QComboBox, QSpinBox, and more.

> One central widget is in the center of the window. The central widget can be of any type, or it can be a composite widget.

> Several dock widgets are around the central widget. Dock widgets are small, movable windows.

> One status bar is at the bottom of the window. The status bar shows information on the application’s general status.

You can’t create a main window without first setting a central widget. You must have a central widget, even if it’s just a placeholder. When this is the case, you can use a QWidget object as your central widget. You can set the main window’s central widget with .setCentralWidget(). The main window’s layout will allow you to have only one central widget, but it can be a single or a composite widget.

```
# Filename: main_window.py

"""Main Window-Style application."""

import sys

from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QLabel
from PyQt5.QtWidgets import QMainWindow
from PyQt5.QtWidgets import QStatusBar
from PyQt5.QtWidgets import QToolBar

class Window(QMainWindow):
    """Main Window."""
    def __init__(self, parent=None):
        """Initializer."""
        super().__init__(parent)
        self.setWindowTitle('QMainWindow')
        self.setCentralWidget(QLabel("I'm the Central Widget"))
        self._createMenu()
        self._createToolBar()
        self._createStatusBar()

    def _createMenu(self):
        self.menu = self.menuBar().addMenu("&Menu")
        self.menu.addAction('&Exit', self.close)

    def _createToolBar(self):
        tools = QToolBar()
        self.addToolBar(tools)
        tools.addAction('Exit', self.close)

    def _createStatusBar(self):
        status = QStatusBar()
        status.showMessage("I'm the Status Bar")
        self.setStatusBar(status)

if __name__ == '__main__':
    app = QApplication(sys.argv)
    win = Window()
    win.show()
    sys.exit(app.exec_())

```

### Applications

This class is at the core of any PyQt application when developing PyQt GUI applications. 
It manages the application’s control flow as well as its main settings. In PyQt, any instance of QApplication is considered to be an application. 
Every PyQt GUI application must have one QApplication object. 
Some of the application’s responsibilities include:

> Handling initialization and finalization
> Providing the event loop and event handling
> Handling most of the system-wide and application-wide settings
> Providing access to global information, such as the application’s directory, screen size, and so on
> Parsing common command-line arguments
> Defining the application’s look and feel
> Providing localization capabilities

This is a fundamental class when it comes to developing PyQt GUI applications!

One of the most important responsibilities of QApplication is to provide the event loop and the entire event handling mechanism.


### Event Loops

GUI applications are event-driven. This means that functions and methods are executed in response to user actions like clicking on a button, selecting an item from a combo box, entering or updating the text in a text edit, pressing a key on the keyboard, and so on. These user actions are generally called events.

Events are commonly handled by an event loop (also called the main loop). An event loop is an infinite loop in which all events from the user, the window system, and any other sources are processed and dispatched. The event loop waits for an event to occur and then dispatches it to perform some task. The event loop continues to work until the application is terminated.

Event loops are used by all GUI applications. The event loop is kind of an infinite loop that waits for the occurrence of events. If an event happens, then the loop checks if the event is a Terminate event. In that case, the loop is terminated and the application exits. Otherwise, the event is sent to the application’s event queue for further processing, and the loop starts again.

In PyQt, you can run the application’s event loop by calling .exec_() on the QApplication object.

For an event to trigger a response action, you need to connect the event with the action you want to be executed. In PyQt5, you can establish that connection by using the signals and slots mechanism.

### Signals and Slots

PyQt widgets act as event-catchers. This means that every widget can catch a specific number of events, like mouse clicks, keypresses, and so on. In response to these events, widgets always emit a signal, which is a kind of message that announces a change in its state.

The signal on its own doesn’t perform any action. If you want a signal to trigger an action, then you need to connect it to a slot. This is the function or method that will perform an action whenever the connecting signal is emitted. You can use any Python callable (or callback) as a slot.

If a signal is connected to a slot, then the slot is called whenever the signal is emitted. If a signal isn’t connected to any slot, then nothing happens and the signal is ignored. Here are some of the most useful features of this mechanism:

* A signal can be connected to one or many slots.
* A signal may also be connected to another signal.
* A slot may be connected to one or many signals.
You can use the following syntax to connect a signal to a slot

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

Qt Example & tutorials:
https://doc.qt.io/qt-5/qtexamplesandtutorials.html


# QDate, QTime, QDateTime

PyQt5 has QDate, QDateTime, QTime classes to work with date and time. 
* The QDate is a class for working with a calendar date in the Gregorian calendar. It has methods for determining the date, comparing, or manipulating dates. 
* The QTime class works with a clock time. It provides methods for comparing time, determining the time and various other time manipulating methods. 
* The QDateTime is a class that combines both QDate and QTime objects into one object.

PyQt5 has currentDate(), currentTime() and currentDateTime() methods for determining current date and time.

For more read about Qt Date/Time : 

http://zetcode.com/gui/pyqt5/datetime/




# Converting the ui file to python file

From command prompt,

```
pyuic5 -x <uifilename>.ui -o <pyfilename>.py
```

this code converts a .ui file (which is basically an xml file created by PyQt5 GUI editor) to .py file (python code file)

