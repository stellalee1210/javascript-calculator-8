import {
  DEFAULT_ERROR_MESSAGE,
  BLANK_INPUT_ERROR_MESSAGE,
} from "./constants.js";

import { parser } from "./parser.js";

export function validator(input) {
  if (input.length === 0) throw Error(BLANK_INPUT_ERROR_MESSAGE);

  const USER_INPUT = input.trim();
  const PARSED_INPUT_ARRAY = parser(USER_INPUT);
  const FILTERED_INPUT_ARRAY = PARSED_INPUT_ARRAY.filter(
    (item) => Number(item) > 0 && Number.isInteger(Number(item))
  );

  if (
    PARSED_INPUT_ARRAY.length > 0 &&
    PARSED_INPUT_ARRAY.length === FILTERED_INPUT_ARRAY.length
  )
    return [true, PARSED_INPUT_ARRAY];
  throw Error();
}
