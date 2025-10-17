import {
  DEFAULT_DELIMITERS,
  DELIMITER_REGEX,
  FRONT_PART_REGEX,
  BACK_PART_REGEX,
} from "./constants.js";

function get_custom_delimiter(str) {
  const FORMATTED_DELIMITERS = str
    .replaceAll(FRONT_PART_REGEX, "")
    .replaceAll(BACK_PART_REGEX, " ")
    .trim()
    .split(" ");
  return FORMATTED_DELIMITERS.join("");
}

export function parser(input) {
  let DELIMITER = DEFAULT_DELIMITERS;
  let INPUT = input;

  if (DELIMITER_REGEX.test(INPUT)) {
    const RAW_DELIMITER = DELIMITER_REGEX.exec(INPUT)[0];
    DELIMITER += get_custom_delimiter(RAW_DELIMITER);
    INPUT = input.slice(RAW_DELIMITER.length);
  }

  return INPUT.split(RegExp(`[${DELIMITER}]`));
}
