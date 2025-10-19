import { BLANK_INPUT_ERROR_MESSAGE } from "./constants.js";
import { parser } from "./parser.js";

export function validator(input) {
  if (input.length === 0) throw Error(BLANK_INPUT_ERROR_MESSAGE);

  const parsedInput = parser(input.trim());
  const filterdInput = parsedInput.filter(
    (item) => Number(item) > 0 && Number.isInteger(Number(item))
  );

  if (parsedInput.length > 0 && parsedInput.length === filterdInput.length)
    return [true, parsedInput];
  throw Error();
}
