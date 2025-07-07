function filterEntries(obj, func) {
  let result = {};
  for (const key in obj) {
    if (func([key, obj[key]])) {
      result[key] = obj[key];
    }
  }
  return result;
}
function mapEntries(obj, func) {
  let result = {};
  for (const key in obj) {
    const [key1, values] = func([key, obj[key]]);
    result[key1] = values;
  }
  return result;
}
function reduceEntries(obj, func, i) {
  return Object.entries(obj).reduce(func, i);
}
function totalCalories(obj) {
  return Number(
    reduceEntries(
      obj,
      (acc, [key, values]) => acc + (nutritionDB[key].calories * values) / 100,
      0
    ).toFixed(1)
  );
}
function lowCarbs(obj) {
  // let key = Object.entries(obj)
  return filterEntries(
    obj,
    ([key, values]) => (values * nutritionDB[key].carbs) / 100 <= 50
  );
}

function cartTotal(obj) {
  return mapEntries(obj, ([keys, values]) => {
    const nutrition = nutritionDB[keys];
    const totels = mapEntries(nutrition, ([key, value]) => {
      const total = Number((value * values / 100).toFixed(3));
      return [key, total];
    });
    return [keys, totels];
  });
}
    let  r =  new Date()