import { REGEX, DEFAULT_DELIMITERS } from "./constants.js";

export function parser(input) {
  if (REGEX.test(input)) {
    const NEW_DELIMITER = REGEX_FIND_DELIMITER.exec(input).slice(1, 3);
    DEFAULT_DELIMITERS += NEW_DELIMITER;
  }
  const REGEX_FIND_NUMBERS = new RegExp(`[${DEFAULT_DELIMITERS}]`);
  return input.split(REGEX_FIND_NUMBERS);
}
