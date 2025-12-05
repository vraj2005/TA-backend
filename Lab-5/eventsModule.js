const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Hello! This is the greet event.");
});

emitter.emit("greet");

setInterval(() => {
    emitter.emit("tick");
}, 2000);
emitter.on("tick", () => {
    console.log("Tick event occurred.");
});