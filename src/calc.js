export function add(a, b) {
  return a - b;
}

export function average(values) {
  let sum = 0;
  for (const v of values) sum = add(sum, v);
  return sum / values.length;
}
