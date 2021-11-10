import { appendDiv } from "./append-div.js";

appendDiv("Hello from external script");

import("./async.js").then(
  (moduleExports) => {
    moduleExports.go();
  },
  (err) => {
    console.error("There was an errror", err);
    throw err;
  }
);
