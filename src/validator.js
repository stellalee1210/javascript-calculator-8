import { ERROR_MESSAGE } from "./constants.js";
import { parser } from "./parser.js";

export function validator(input) {
  const PARSED_INPUT_ARRAY = parser(input);
  const FILTERED_INPUT_ARRAY = PARSED_INPUT_ARRAY.filter(
    (item) => !isNaN(item) && Number(item) > 0
  );

  if (input.length === 0) return [false, 0];
  if (
    PARSED_INPUT_ARRAY.length > 0 &&
    PARSED_INPUT_ARRAY.length === FILTERED_INPUT_ARRAY.length
  )
    return [true, PARSED_INPUT_ARRAY];
  return [false, ERROR_MESSAGE];
}
