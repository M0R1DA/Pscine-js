function reduce(array, func, i = 0) {
  let result = i;
  for (const key in array) {
    result = func(result[key], array[key]);
  }
  return result;
}
