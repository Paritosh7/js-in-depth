console.log("hey");
const worker = new Worker("worker.js");
worker.postMessage("Hello worker from main");

worker.onmessage = (eve) => {
  console.log("main.js : Message received from worker", eve.data);
};
