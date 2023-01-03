# React

React is a JavaScript library for building user interfaces.
Please refer the link for more information - [React Docs](https://reactjs.org/docs/getting-started.html)

## Installation

Install react and react-dom in the global environment 

```bash
npm install react
npm install react-dom
```
Use the package manager, [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) init <initializer> can be used to set up a new or existing npm package.



```bash
npm install -y  
npm init
```

Now its time to install the bundler which helps us to manage all the services across the project. We are going to use [parcel](https://parceljs.org/docs/). Refer the docs for more information.

```bash
npm install -D parcel
or
npm install --save-dev parcel
``` 

## Package.json

```json
{
  "name": "learning-react",
  "version": "1.0.0",
  "description": "This is a live react class",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com-personal:ravichandola/Learning-React.git"
  },
  "author": "Ravi Chandola",
  "license": "ISC",
  "keywords": [],
  "devDependencies": {
    "parcel": "^2.8.2",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```
## Babel

```bash
npm install --save-dev @babel/preset-env
```

We need to run this command in our console and then set the configuration of babel for the same in babelrc file 

[`BABEL DOCS`](https://babeljs.io/docs/en/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)