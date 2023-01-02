# ASSIGNMENT 2

## What is `NPM`?

`NPM` - it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. For more details please go through the below link.

[NPM DOCS](https://docs.npmjs.com/)

## What is `Parcel/Webpack`? Why do we need it?
Parcel.js is an open-source bundler or module bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in: a development server, diagnostics, minification, and even image compression.

Parcel is a bundler which helps our project to run and supports the application in various ways :
1. Parcel brings simplicity. Parcel brands itself as “zero configuration”.
2. Parcel has a development server built-in, out of the box. The development server will automatically rebuild your app as you change files and supports hot module replacement for fast development.
3. Parcel has out of the box support for JS, CSS, HTML, file assets, and more — no plugins needed — More user-friendly.
4. Friendlier error logs.   

[`PARCEL DOCS`](https://parceljs.org/docs/)

## What is `.parcel-cache`
The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. 

Parcel uses caching to make the builds faster. The first time you run Parcel it does some caching, which makes the next build run much quicker. The caching works best for medium-sized applications and up.

## What is `npx` ?
The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

## What is difference between `dependencies` vs `devDependencies`
`dependencies` : Packages required by your application in production. In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object. 

```bash
npm install <package name>
```

`devDependencies` : Packages that are only needed for local development and testing. In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever you want to install any library that is required only in your development phase then you can find it in the dev Dependencies object. 

```bash
npm install <package name> --save-dev
or
npm install -D <package name>
```
## What is Tree Shaking?
Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. In modern JavaScript applications, we use module bundlers (e.g., webpack or parcel) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.



## What is Hot Module Replacement?
Hot module replacement is actually a runtime change in a code which helps developer for better experience by automatically updating modules in the browser at runtime without refreshing the whole page.Parcel's HMR implementation supports both JS and CSS.

[HOT MODULE REPLACEMENT IN PARCEL](https://v1.parceljs.org/hmr.html)

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.


## What is `.gitignore`? What should we add and not add into it?
A gitignore file specifies intentionally untracked files that Git should ignore. So when we install any dependency from npm, it creates the entry of the packages in node_modules and its a good practice to put that node_module folder in git ignore so that it will not take much space in server and anyhow when we use package.json file and install that in our local machine, then node will install all the packages from json file.

## What is the difference between `package.json` and `package-lock.json`
 a package.json file contains metadata about the project and also the functional dependencies that is required by the application.

  package.lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json. Without package.lock.json, there might be some differences in installed versions in different environments. To overcome this problem, package.lock.json is created to have the same results in every environment. It should be in source control with the package.json file because if any other user will clone the project and install dependencies then it will install the exact same dependencies as in package.lock.json to avoid differences.

## Why should I not modify `package-lock.json`?
It impacts the versioning of the project and may create chaos. Due to the modification in package-lock.json the project might lost its uniformity.

## What is `node_modules` ? Is it a good idea to push that on git?
I refer to it as a cache because the node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in your project folders).No, Its not a good idea to push that on git,  there's no reason to store copies of all your dependent modules in your own GitHub project. The exact version you were using is known and stored in your package.json or package-lock.json.

## What is the `dist` folder?
The dist folder contains the minimized version of the source code and it stands for distributable. The code present in the /dist folder is actually the code which is used on production web applications. The /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

## What is `browserlists`
Browserslist helps you keep the right balance between browser compatibility and bundle size. With Browserslist, you will cover wider audience and have smaller bundle size. 

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

[`BROWSER LIST`](https://browsersl.ist/)


## Read about different bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda

● Read about Script types in html (MDN Docs)