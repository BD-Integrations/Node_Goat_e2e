// Simulated vulnerable lodash file (4.17.11)
function set(obj, path, value) {
  if (!obj || typeof obj !== 'object') return obj;
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
  return obj;
}

// Vulnerable usage
let obj = {};
set(obj, '__proto__.polluted', 'Yes!');
console.log('Polluted?', {}.polluted);
