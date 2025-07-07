function filterKeys(obj, func) {
  let result = {};
  for (const key in obj) {
    if (func(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

function mapKeys(obj, func) {
  let result = {};
  Object.keys(obj).forEach((key) => {
    result[func(key)] = obj[key];
  });
  return result;
}
function reduceKeys(obj, func, initialValue) {
  const keys = Object.keys(obj);
  if (keys.length === 0) return initialValue;

  let result;
  let start = 0;

  if (initialValue === undefined) {
    result = keys[0];
    start = 1;
  } else {
    result = initialValue;
  }

  for (let i = start; i < keys.length; i++) {
    result = func(result, keys[i]); 
  }

  return result;
}
