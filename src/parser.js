import {
  DEFAULT_DELIMITERS,
  DELIMITER_REGEX,
  BLANK_DELIMITER_REGEX,
} from "./constants.js";

export function parser(input) {
  let DELIMITER = DEFAULT_DELIMITERS;
  let INPUT = input;
  if (DELIMITER_REGEX.test(INPUT)) {
    const NEW_DELIMITER = input.slice(2, 3);
    DELIMITER += NEW_DELIMITER;
    INPUT = input.slice(5);
  }
  if (BLANK_DELIMITER_REGEX.test(INPUT)) INPUT = input.slice(4);

  const REGEX_FIND_NUMBERS = new RegExp(`[${DELIMITER}]`);
  return INPUT.split(REGEX_FIND_NUMBERS);
}
