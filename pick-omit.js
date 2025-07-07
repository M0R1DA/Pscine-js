function pick(obj, keys) {
  const keysArray = Array.isArray(keys) ? keys : [keys];
  const result = {};
  const Keys = Object.keys(obj);

  for (const key of keysArray) {
    if (Keys.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}
function omit(obj, keys) {
  const keysArray = Array.isArray(keys) ? keys : [keys];
  const result = {};
  const Keys = Object.keys(obj);

  for (const key of Keys) {
    if (!keysArray.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
} 

 