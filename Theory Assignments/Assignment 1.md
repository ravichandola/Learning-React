# ASSIGNMENT 1

## WHAT IS EMMET?
Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation.

For more details please go through the link [Emmet Docs](https://docs.emmet.io/). You can also get an extension in VSCode too. 

## What is the difference between Library and Framework?
The technical difference between a framework and library lies in a term called inversion of control.

When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

A library is a collection of reusable, compiled, and tested code that can facilitate the automation or augmentation of application functionalities. It’s designed to support both the code developer and code compiler during the build process and the running of the application. A library implements many functions, variables, and parameters.

## What is CDN? Why do we use it?
A CDN[Content delivery network] is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device.

** A CDN allows for the quick transfer of assets needed for loading Internet content including HTML     pages, javascript files, stylesheets, images, and videos.

** CDN does not host content and can’t replace the need for proper web hosting, it does help cache content at the network edge, which improves website performance.

** Benefits of using CDN
   1. Improving website load times
   2. Reducing bandwidth costs
   3. Increasing content availability and redundancy
   4. Improving website security
   
   Both React and ReactDOM are available over a CDN.

``` bash
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

## Why is React is known as React?
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.

The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. - copied

## What is crossorigin in script tag?
The crossorigin attribute, valid on the audio, img, link, script, and video elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute.

```bash
<script crossorigin src="..."></script>
```

## What is difference between React and ReactDOM?
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser. So when we are trying to build application for web or mobile(native apps), our react-dom should be different. 

The react package holds the react source for components, state, props and all the code that is react.

The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().

## What is difference between react.development.js and react.production.js files via CDN?
The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.

The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included. Source Maps might be included as separate files depending on your webpack devtool settings.

What specifically separates production from development is dependent on your preferences and requirements, which means it pretty much depends on what you write in your Webpack/parcel configuration.

## What is async and defer? 
### Async : 
It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

```javascript
 const getData = async() => {
    var data = "Hello World";
    return data;
    }
      
    getData().then(data => console.log(data));
```

```bash
Hello World
```

### Defer :
The defer attribute tells the browser not to interfere with the HTML parsing and only to execute the script file once the HTML document has been fully parsed. Whenever a script with this attribute is encountered, the downloading of the script starts asynchronously in the background and when the scripts get downloaded, it is executed only after the HTML parsing is finished.

Please click the below links

[GFG blog](https://www.geeksforgeeks.org/explain-asynchronous-vs-deferred-javascript/)

[Video by Akshay Saini](https://www.youtube.com/watch?v=IrHmpdORLu8)
