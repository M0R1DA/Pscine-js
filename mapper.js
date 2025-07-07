function map(array, f) {
  const arr = []; 
  for (let i = 0; i < array.length; i++) {
    arr.push(f(array[i], i, array));
  }
  return arr;
}

function flatMap(arr, func) {
  const arrr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i], i, arr);
    if (Array.isArray(result)) {
      arrr.push(...result); 
    } else {
      arrr.push(result); 
    }
  }
  return arrr;
}


// bghit id /#

// bnghiti clase dir /.
// bghiti tag dir p