"use strict";
const obj = { a: 1, b: 2, c: { d: 15 } };
Object.freeze(obj);

obj.c.d = 56;
obj.c.e = { f: 99 };

console.log(obj);
