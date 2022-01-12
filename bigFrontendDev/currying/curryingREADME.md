Currying is a transformation of functions that translates a function from callable as f(a,b,c) into callable as f(a)(b)(c).

Basic implementation of currying only allows partial calling whereas advanced implementation of currying allows functions to be called both normally and partially.

Currying requires the function to have a fixed number of arguments. A function that uses rest parameter, such as f(...args), can't be curried.

Currying allows us to easily get partials which can be used according to requirements.
