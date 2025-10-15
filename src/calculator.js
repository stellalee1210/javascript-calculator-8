export function add(input) {
  return input.reduce((acc, cur) => Number(acc) + Number(cur));
}
