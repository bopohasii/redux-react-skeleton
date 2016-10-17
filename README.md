# Redux React Skeleton
This skeleton is designed to get up and running with a bunch of awesome new front-end technologies, all on top of a configurable, feature-rich webpack build system that's already setup to provide hot reloading, CSS modules with Sass support, unit testing, code coverage reports, bundle splitting, and a whole lot more.

## Requirements
- ``` $ node -v ``` is a **^4.2.0**

- ``` $ npm -v ``` is a **^3.0.0**


## Instalation
```
$ git clone https://github.com/Noxwille/redux-react-skeleton.git
$ cd redux-react-skeleton
$ npm install 
```


## Development

- ``` $ develop:build ``` - Provide **compiled**, and **minified** bundles to 'public' directory.

- ``` $ npm run develop:devserver ``` - Runs the project in development mode with hot-reloading of 'public' folder. Open your browser at http://localhost:3030.

- ``` npm run test ``` - Runs tests **once** with Mocha(server side interpretation). Entry point: **'test/setup.js'**.

- ``` npm run test:watch ``` - **Continuously** watch changes and run tests immediately after changes.

- ``` npm run lint ``` - Runs eslint checker **once**. Entry point: **'.eslintrc'**.

- ``` npm run lint:watch ``` - **Continuously** watch changes and run Run eslint checker immediately after some changes.

- ``` npm run clear ``` - Remove 'public' and 'node_modules' folders.


## Libs
- [`normalizr`](https://github.com/paularmstrong/normalizr) - Normalizes deeply nested JSON API responses according to a schema for Flux and Redux apps.
Kudos to Jing Chen for suggesting this approach.
- [`reselect`](https://github.com/reactjs/reselect) - Simple “selector” library for Redux.
Selectors can compute derived data, allowing Redux to store the minimal possible state.
Selectors are efficient. A selector is not recomputed unless one of its arguments change.
Selectors are composable. They can be used as input to other selectors.
- [`react-waypoint`](https://github.com/brigade/react-waypoint) - A React component to execute a function whenever you scroll to an element. Works in all containers that can scroll, including the window. Can be used to build features like lazy loading content, infinite scroll, scrollspies, or docking elements to the viewport on scroll. More info [`here`](http://brigade.github.io/react-waypoint/), and [`here`](https://medium.com/brigade-engineering/to-infinity-and-beyond-with-react-waypoint-cb5ba46a9150#.ox4qn8r6n)



## Code standart
### Common (es2015, React, Sass)
- [`AirBnb code style`](https://github.com/airbnb/javascript)

### Types
A single type must be a string.
Type string  should consist information about `action` (GET, SET, ...) and entity to which this action influences.
``` GET_USERS: 'GET_USERS' ```

### Actions

An action MUST

- be a plain JavaScript object.
- have a `type` property.

An action MAY

- have a `error` property.
- have a `payload` property.
- have a `meta` property.

An action MUST NOT include properties other than `type`, `payload`, and `error`, and `meta`.

### `type`

The `type` of an action identifies to the consumer the nature of the action that has occurred. Two actions with the same `type` MUST be strictly equivalent (using `===`). By convention, `type` is usually string constant or a Symbol.

### `payload`

The optional `payload` property MAY be any type of value. It represents the payload of the action. Any information about the action that is not the `type` or status of the action should be part of the `payload` field.

### `error`

The optional `error` property MAY be any type of value. Object if error exist or `null` if error not exist.

### `meta`

The optional `meta` property MAY be any type of value. It is intended for any extra information that is not part of the payload.


## Contribution
Before push commit make sure that all modules are added in package.json

### Git branching stategy
![Git branching stategy](https://s32.postimg.org/3t15v0lhx/Git_branching_model.jpg)

##### keywords:  [`#Redux`](https://github.com/rackt/redux) [`#React`](https://facebook.github.io/react/) [`#ES2015`](http://www.ecma-international.org/ecma-262/6.0/) [`#Webpack`](https://webpack.github.io) [`#Babel`](https://babeljs.io) [`#Mocha`](https://mochajs.org) [`#Chai`](http://chaijs.com)
