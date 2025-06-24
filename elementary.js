function multiply(a, b) {
  let result = 0;
  const positive = Math.abs(b);
  for (let i = 0; i < positive; i++) {
    result += a;
  }
  return b < 0 ? -result : result;
}
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  const isNegative = (a < 0) !== (b < 0);
  let absA = Math.abs(a);
  let absB = Math.abs(b);
  let count = 0;

  while (absA >= absB) {
    absA -= absB;
    count++;
  }

  return isNegative ? -count : count;
}
function modulo(a, b) {
  if (b === 0) throw new Error("Division by zero");
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  let remainder = absA;

  while (remainder >= absB) {
    remainder -= absB;
  }

  return a < 0 ? -remainder : remainder;
}
