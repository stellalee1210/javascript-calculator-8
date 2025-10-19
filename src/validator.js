import { parser } from "./parser.js";
import {
  ERROR_INVALID_INPUT_BLANK,
  ERROR_INVALID_INPUT_NOT_POSITIVE_INTEGER,
  ERROR_INVALID_DELIMITER,
} from "./constants.js";

export function validator(input) {
  if (input.length === 0) throw Error(ERROR_INVALID_INPUT_BLANK);

  const parsedInput = parser(input.trim()).map(Number);
  const filteredInput = [];
  parsedInput.forEach((value) => {
    if (isNaN(value)) throw Error(ERROR_INVALID_DELIMITER);
    if (value <= 0 || !Number.isInteger(value))
      throw Error(ERROR_INVALID_INPUT_NOT_POSITIVE_INTEGER);

    filteredInput.push(Number(value));
  });

  if (parsedInput.length > 0 && parsedInput.length === filteredInput.length)
    return [true, parsedInput];
  throw Error();
}
