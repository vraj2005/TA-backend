const url = require("url");

const inputURL = "https://example.com:8090/users/profile?id=10&name=arjun";

// const parsed = url.parse(inputURL, true);
// console.log(parsed)

// console.log("Protocol:", parsed.protocol);
// console.log("Hostname:", parsed.hostname);
// console.log("Pathname:", parsed.pathname);
// console.log("Query Params:", parsed.query);
// console.log("Port:", parsed.port);


const myURL = new URL("https://example.com:8090");
myURL.pathname = "/products/item";

myURL.searchParams.append("id", "101");
myURL.searchParams.append("color", "blue");

console.log("Final URL:", myURL);
console.log("Serialized URL:", myURL.toString());


