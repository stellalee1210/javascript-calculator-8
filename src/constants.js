export const DEFAULT_ERROR_MESSAGE = `[ERROR]`;
export const INVALID_INPUT_BLANK = `${DEFAULT_DELIMITERS} : 입력 값이 비어있습니다.`;
export const INVALID_INPUT_NEGATIVE = `${DEFAULT_DELIMITERS} : 입력 값에 음수가 들어있습니다. 음수는 입력할 수 없습니다.`;
export const INVALID_INPUT_DECIMAL = `${DEFAULT_DELIMITERS} : 입력 값에 소수값이 있습니다. 소수값은 입력할 수 없습니다.`;
export const INVALID_DELIMITER = `${DEFAULT_DELIMITERS} : 설정되지 않은 구분자가 있습니다. 기본 구분자는 ,와 ;이며, 커스텀 구분자는 //과 \\n사이에 넣어 설정할 수 있습니다.`;
export const DEFAULT_DELIMITERS = `,;`;

export const DELIMITER_REGEX = new RegExp("^//.*\\\\n");
export const FRONT_PART_REGEX = "//";
export const BACK_PART_REGEX = "\\n";
