function throttle(func, delay) {
  let isThrottled = false;
  return function (...args) {
    if (isThrottled) return;
    func(...args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}
function opThrottle(func, delay, options = {}) {
  // let called = null;
  let timeout = false;
  return function (...args) {
    if (!timeout) {
      if (options.leading) {
        func(...args);
      }
      timeout = true;
      setTimeout(() => {
        if (!options.leading) {
          func(...args);
        }
        timeout = false;
      }, delay);
    }
  };
}
