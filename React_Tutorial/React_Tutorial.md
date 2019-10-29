# Install Node.js

* Browse Download Node.js
* Download latest version & Install
* This installation also installs the npm.
* To check for proper installation, open command prompt
```
$ node -v    # => displays the version of node installed.

$ npm -v    # => displays the version of npm installed. 

$ node
> 1+1       # => should return 2
```

# Start a new React app

```
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

Then open http://localhost:3000/ to see your app.

When you are ready to deploy to production, create a minified bundle with 

```
npm run build.
```


# About React

* React is a JavaScript library developed by Facebook (by Jordan Walke, a software engineer) which makes it very easy to create interactive UIs.
* Most technologies involved while creating React application are

1) React
2) Create React App
3) JSX (Syntax)
4) NPM
5) Cross platform
6) SPA - Single page application
7) RWD - Responsive Web Development

* React uses JSX - JAvaScript XML
    React creators created a language called JSX.  JSX (JavaScript XML) is an extension to the JavaScript language syntax. It is very much like a JavaScript rendition or version of HTML. JSX looks almost identical to HTML.

    This is a reason why we have to import React in the first line.  The React library is the one that will enable JSX to work the way it's supposed to work.

    ```
    import React from 'react';
    ```

* It is important to know is that you cannot render two JSX objects next to each other! 

    ```
    ReactDOM.render(<h1>Hello World</h1><h2>Sub heading</h2>, document.getElementById("root"));
    ```
    The above code will cause an error. Remember it is an XML and hence the 2 JSX objects (h1 & h2) need to be wrapped (maybe with a <div> tag or so) before passing as the first argument to ReactDOM.render(). Like,

    ```
    ReactDOM.render(
        <div>
        <h1>Hello World</h1>
        <h2>Sub heading</h2>
        </div>,
        document.getElementById("root")
    );
    ```
    OR if you don't want the extra <div> tag, you can use <React.Fragment> tag like : 

    ```
    ReactDOM.render(
        <React.Fragment>
        <h1>Hello World</h1>
        <h2>Sub heading</h2>
        </React.Fragment>,
        document.getElementById("root")
    );
    ```

* Virtual DOM

    Virtual DOM is a JavaScript object that is a 'virtual'  representation of 'real' DOM.

* Why use React?

    1) It updates & renders only the elements that change/update in the DOM. Hence quick rendering.

    2) Build encapsulated components that can manage their own state.

    3) React can also render on the server using Node and powerful mobile apps using React Native.



