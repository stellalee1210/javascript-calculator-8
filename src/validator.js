import { REGEX, ERROR_MESSAGE } from "./constants.js";
import { parser } from "./parser.js";

export function validator(input) {
  if (input.length === 0) return 0;
  if (REGEX.test(input)) {
    const PARSED_INPUT_ARRAY = parse(input);
    const FILTERED_INPUT_ARRAY = PARSED_INPUT_ARRAY.filter(
      (item) => typeof item === Number
    );
    if (PARSED_INPUT_ARRAY.length === FILTERED_INPUT_ARRAY.length) return true;
  }
  return ERROR_MESSAGE;
}
