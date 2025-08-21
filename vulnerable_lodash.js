
// Vulnerable usage of lodash (version 4.17.11)
const _ = require('lodash');

// Prototype pollution vulnerability example
let obj = {};
_.set(obj, '__proto__.polluted', 'Yes!');

console.log("Polluted?", {}.polluted);
