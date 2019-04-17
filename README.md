js-with-typecheck
=================
This repo shows how to leverage the [Typescript](http://typescriptlang.org)
compiler to provide type checking to [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
projects, without neither changing the existing implementations on the codebase
nor the existing build system.

The repo implements a simple library without a build system. The code runs _as
is_ on [NodeJs](https://nodejs.org/en/), version 8.11 or above. The main idea
is to demonstrate the changes from a naive _really_ untyped javascript codebase
into an optionally type aware project.

This repo is organized as a series of steps, following it's folders' names:

step-1: Typical Javascript code
-------------------------------
This is a _typical_ implementation of a simple NodeJs module in Javascript.
Type checking is done on runtime and an unit test is provided to assert that
this type checking is implemented. Nevertheless, the TypeError caused by the
function `ofender` will only be caught on run-time.

```javascript
const increment = x => {
  if(typeof(x) !== "number") throw new TypeError();
  return x +1;
}

const offender = () => doubler('aa');
```

step-2: adding JsDoc annotations to own code
--------------------------------------------
Starting from a copy of step-1, [JsDoc](http://usejsdoc.org/) annotations are
added to the existing code. Notice that these annotations are regular Javascript
comments and require no change to the build process.

```javascript
/**
 * This method returns the number passed in argument _x_ plus 1.
 * 
 * @param {number} x
 * @returns {number} the value of x plus 1
 */
const increment = x => {
  if(typeof(x) !== "number") throw new TypeError();
  return x +1;
}

const offender = () => doubler('aa');
```

Although these changes do not alter any syntatical elements in the Javascript
code, they provide enough information for the Typescript compiler to check the
the types and to raise a **compile-time** error for the function `ofender`.


the build process _can_ leverage on the Typescript compiler to run type
checking based on the JsDoc. For this intent, the npm script `typecheck` was
created and the Typescript was added to the dev-dependencies.

Running this new npm script `$ npm run typecheck` yields the following
compilation error; although both versions, either on _step-1_ and _step-2_ do
check for the correctness of the argument type, the compilation process on
_step-2_ identifies the issue earlier:
```
$ npm run typecheck

> js-with-typecheck@1.0.0 typecheck /Users/gerardolima/repos/js-with-typecheck
> tsc --allowJs --strict --noemit --checkJs **/index.js 

step-2/index.js:15:32 - error TS2345: Argument of type '"qq"' is not assignable to parameter of type 'number'.

15 const offender = () => doubler('qq');
```

> Since _step-1/index.js_ does not abide to the compilation rules (_and its
> intention is exactly to make a memory for comparison_) it was marked for not
> to be checked by the Typescript (the `//@ts-nocheck` comment at the top of
> the file). 

In cases when it's not possible to add scripts or dependencies to the npm
package, still the tsc compiler can be run locally, as an extra safe-guard,
from a global installation.

Installation and tests
----------------------
Clone this repository locally and install its dependencies on the standard way,
by running `$ npm install`. The tests are run using `$ npm test`.

Credits
-------
This repository was inspired by the following article:
https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76
