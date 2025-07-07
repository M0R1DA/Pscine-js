function fusion(...object) {
  let obj = object[0];

  for (let i = 1; i < object.length; i++) {
    for (let key in object[i]) {
      if (Array.isArray(obj[key]) && Array.isArray(object[i][key])) {
        obj[key] = obj[key].concat(object[i][key]);
      } else if (
        typeof obj[key] === "object" &&
        typeof object[i][key] === "object"
      ) {
        fusion(obj[key], object[i][key]);
      } else if (
        typeof obj[key] === "string" &&
        typeof object[i][key] === "string"
      ) {
        obj[key] = obj[key] + " " + object[i][key];
      } else if (
        typeof obj[key] === "number" &&
        typeof object[i][key] === "number"
      ) {
        obj[key] = obj[key] + object[i][key];
      } else {
        obj[key] = object[i][key];
      }
    }
  }
  return obj;
}
//{ arr: [12, 3], arr1: [1, 2, 3], arr2: ['2', '1'] }

// console.log(fusion({ str: 'hello' }, { str: 'morida' })); // -> { a: 20, b: 10, c: 1 }); // -> { a: 20, b: 10, c: 1 });

//  console.log(
//   fusion({ str: "salem" }, { str: " " })); // -> { str: 'salem alem' }
// console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // -> { arr: [ 1, '2', 2 ] }
// console.log(
//  fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } })); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
console.log(
  fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })
); // -> { a: 11, x: [], b: { c: 'Salem alem' } });
