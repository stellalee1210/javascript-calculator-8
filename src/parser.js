import { DEFAULT_DELIMITERS } from "./constants.js";

export function parser(input) {
  let DELIMITER = DEFAULT_DELIMITERS;
  let INPUT = input;
  if (input.slice(0, 2) === "//" && input.slice(3, 5) === "\\n") {
    const NEW_DELIMITER = input.slice(2, 3);
    DELIMITER += NEW_DELIMITER;
    INPUT = input.slice(5);
  }
  const REGEX_FIND_NUMBERS = new RegExp(`[${DELIMITER}]`);
  return INPUT.split(REGEX_FIND_NUMBERS);
}
