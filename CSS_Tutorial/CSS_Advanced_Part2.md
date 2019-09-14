
CSS | Media Queries
===================

Media query is used to create responsive web design. It means that the view of web page differ from system to system based on screen or media types.

Syntax:

@media not | only mediatype and (expression) {
    // Code content
}

Example:

Check the code on HTML_Files/CSS_MQ_Example.html 
and test it by opening it in a browser window & resizing the window.       

Media queries can be used to check many things:

    width and height of viewport
    width and height of device
    Orientation
    Resolution


Media Types in CSS: There are many types of media types which are listed below:

    all: It is used for all media devices
    print: It is used for printer.
    screen: It is used for computer screen, smartphone, etc.
    speech: It is used for screen readers that read the screen loud.


Features of Media query: There are many features of media query which are listed below:

    color: The number of bits per color component for output device.
    grid: Checks whether the device is grid or bitmap.
    height: The viewport height.
    aspect ratio: The ratio between width and height of viewport.
    color-index: The number of colors the device can display.
    max-resolution: The maximum resolution of the device using dpi and dpcm.
    monochrome: The number of bits per color on a monochrome device.
    scan: The scanning of output devices.
    update: How quickly can output device modify.
    width: The viewport width.




CSS | Pseudo-classes
====================

A pseudo-class is used to define a special state of an element.
Pseudo-classes let you apply a style to an element not only in relation to the content of the document tree, 
but also in relation to external factors.

For example, 

* like the history of the navigator, it Styles visited and unvisited links differently
* like the status of its content, it Styles checked on certain form elements)
* like the position of the mouse, it Styles hover, which lets you know if the mouse is over an element or not
or Style an element when it gets focus

Syntax

selector:pseudo-class {
  property:value;
}

Note: a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! 
a:active MUST come after a:hover in the CSS definition in order to be effective! 
Pseudo-class names are not case-sensitive.

Pseudo-classes can be combined with CSS classes or Hover on <div> etc...

When you hover over the link or div in the example, it will change color:

Example

Check the code on HTML_Files/CSS_PseudoClasses_Example.html 




CSS | Responsive Design
=======================

Responsive web design makes your web page look good on all devices: desktops, tablets, or phones.
It uses only HTML and CSS and not any program or JavaScript.

A web page should look good and should not leave out information to fit smaller devices, but rather adapt its content to fit any device. It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen size.

Viewport :

A viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen. HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.
The following <meta> viewport element needs to be included in all web pages:

<meta name="viewport" content="width=device-width, initial-scale=1.0">

* A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.
* The "width=device-width" part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
* The "initial-scale=1.0" part sets the initial zoom level when the page is first loaded by the browser.

There are other settings you can use with the viewport meta tag, however in general the above line is what you will want to use.

height: Sets a specific height for the viewport.
minimum-scale: Sets the minimum zoom level.
maximum-scale: Sets the maximum zoom level.
user-scalable: Prevents zooming if set to no.

You should avoid using minimum-scale, maximum-scale, and in particular setting user-scalable to no. Users should be allowed to zoom as much or as little as they need to; preventing this causes accessibility problems.

Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally!
So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience.

Some additional rules to follow:

1. Do NOT use large fixed width elements
2. Do NOT let the content rely on a particular viewport width to render well
3. Use CSS media queries to apply different styling for small and large screens

Grid-View :

Using a grid-view is very helpful when designing web pages. It makes it easier to place elements on the page.
A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window. 
Ensure that all HTML elements have the box-sizing property set to border-box. This makes sure that the padding and border are included in the total width and height of the elements.

* {
  box-sizing: border-box;
}

Multicol :

When you specify a column-count, this indicates how many columns you want your content to be split into. The browser then works out the size of these, a size that will change according to the screen size.

.container { 
  column-count: 3; 
} 

If you instead specify a column-width, you are specifying a minimum width. The browser will create as many columns of that width as will comfortably fit into the container, then share out the remaining space between all the columns. Therefore the number of columns will change according to how much space there is.

.container { 
  column-width: 10em;
} 

Flexbox :

Flex items will shrink and distribute space between the items according to the space in their container, as their initial behavior. By changing the values for flex-grow and flex-shrink you can indicate how you want the items to behave when they encounter more or less space around them.

In the example below the flex items will each take an equal amount of space in the flex container, using the shorthand of flex: 1 as described in the layout topic Flexbox: Flexible sizing of flex items.

.container { 
  display: flex; 
} 

.item { 
  flex: 1; 
} 

Example

Check the code on HTML_Files/CSS_ResponsiveDesign_Example.html 
