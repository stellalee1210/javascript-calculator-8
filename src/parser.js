import {
  DEFAULT_DELIMITERS,
  DELIMITER_REGEX,
  FRONT_PART_REGEX,
  BACK_PART_REGEX,
} from "./constants.js";

function get_custom_delimiter(str) {
  const formattedDelimiters = str
    .replaceAll(FRONT_PART_REGEX, "")
    .replaceAll(BACK_PART_REGEX, " ")
    .trim()
    .split(" ")
    .join("");
  if (formattedDelimiters.includes("\\")) throw Error();
  return formattedDelimiters;
}

export function parser(input) {
  let delimiters = DEFAULT_DELIMITERS;
  let formattedInput = input;

  if (DELIMITER_REGEX.test(input)) {
    const RAW_DELIMITER = DELIMITER_REGEX.exec(input)[0];
    delimiters += get_custom_delimiter(RAW_DELIMITER);
    formattedInput = input.slice(RAW_DELIMITER.length);
  }

  return formattedInput.split(RegExp(`[${delimiters}]`));
}
