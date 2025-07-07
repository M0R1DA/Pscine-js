function filterValues(obj, func) {
  let result = {};
  for (const key in obj) {
    if (func(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}
function mapValues(obj, func) {
  let result = {};
  for (const key in obj) {
    result[key] = func(obj[key]);
  }
  return result;
}
function reduceValues(obj, func, i = 0) {
  let reuslt = i;
  for (const key in obj) {
    reuslt = func(reuslt, obj[key]);
  }
  return reuslt;
}
 