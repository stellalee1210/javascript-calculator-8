import { DEFAULT_DELIMITERS, DELIMITER_REGEX } from "./constants.js";

function get_custom_delimiter(str) {
  const SLICED_DELIMITERS = str.slice(2, str.length - 2);
  return [...SLICED_DELIMITERS]
    .filter((delimiter) => !DEFAULT_DELIMITERS.includes(delimiter))
    .join("");
}

export function parser(input) {
  let DELIMITER = DEFAULT_DELIMITERS;
  let INPUT = input;

  if (DELIMITER_REGEX.test(INPUT)) {
    const RAW_DELIMITER = DELIMITER_REGEX.exec(INPUT)[0];
    DELIMITER += get_custom_delimiter(RAW_DELIMITER);
    INPUT = input.slice(RAW_DELIMITER.length);
  }

  const REGEX_FIND_NUMBERS = new RegExp(`[${DELIMITER}]`);
  return INPUT.split(REGEX_FIND_NUMBERS);
}
