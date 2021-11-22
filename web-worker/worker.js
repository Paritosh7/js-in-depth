this.onmessage = (e) => {
  console.log("worker.js : Message received from main: ", e.data);
  this.postMessage("Hello from worker");
};
