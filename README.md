js-with-typecheck
=================
This repo shows how to leverage on the Typescript compiler to provide (some) 
type checking on Javascript projects, without neither changing the existing
implementations nor the existing build system.

This repo implements a simple library without a build system, but a proper one
can be easily added. The code should run _as is_ on NodeJs version 8.11 or
above. The main idea is to demonstrate the changes from a naive _really_
untyped javascript codebase into an optionally type aware project.

Installation and tests
----------------------
Clone this repository locally and install its dependencies on the standard way,
by running `$ npm install`. The tests are run using `$ npm test`.

Organization
------------
This repo is organized as a sequential storyline on it's folders:


### step-1
This is a _typical_ implementation of a simple NodeJs module in Javascript.
Type checking is done on runtime and an unit test is provided to assert that
this type checking is implemented.

### step-2
Starting from a copy of step-1, [JsDoc](http://usejsdoc.org/) annotations are
added to the existing code.
