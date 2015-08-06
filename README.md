#ES7 Async Functions

This was tested under io.js v2.3.4.

## Usage

### Install Babel etc.
```bash
npm install
```

### Run an individual script:
Because we're using an ES7 feature that's behind a flag, in order to save a bit of typing, there is a `run.js` script that will use Babel to transpile and run the other example scripts.
```bash
./run.js es7-async-functions.js
./run.js from_slides/generator-bidi.js
```

## Examples
There are three implementations of the example script from the end of the Keynote presentation:

### es5.js
Implemented in today's standard basic ES5 Node.js style, with no support from flow control libraries of any sort.

### es6-promises.js
The same script but using Promises as introduced in ES6.

### es7-async-functions.js
The same script again, but implemented using ES7 Async Functions. Could be modified to use ES6 Generators and the `co` library instead with trivial modifications. (`async function` -> `function*`, and `await` -> `yield`)

### from_slides
This folder contains runnable versions of the rest of the small examples from the slide deck.
