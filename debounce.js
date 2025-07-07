function debounce(func, time) {
  let timenaw; // curry

  return function (...args) {
    clearTimeout(timenaw);

    timenaw = setTimeout(() => {
      func(...args);
    }, time);
  };
}

function opDebounce(func, time, d = false) {
  let timenaw;
  return function (...args) {
    if (d) {
      func(...args);
      d = false;
      clearTimeout(timenaw);
      timenaw = setTimeout(() => {
        func(...args);
      }, time);
    } else {
      clearTimeout(timenaw);
      timenaw = setTimeout(() => {
        func(...args);
      }, time);
    }
  };
}
