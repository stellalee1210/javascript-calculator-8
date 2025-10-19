export const DEFAULT_ERROR_MESSAGE = `[ERROR]`;
export const ERROR_INVALID_INPUT_BLANK = `${DEFAULT_ERROR_MESSAGE} : 입력 값이 비어있습니다.`;
export const ERROR_INVALID_INPUT_NOT_POSITIVE_INTEGER = `${DEFAULT_ERROR_MESSAGE} : 입력 값이 양인 정수가 아닙니다. 음수나 소수는 입력할 수 없습니다.`;
export const ERROR_INVALID_DELIMITER = `${DEFAULT_ERROR_MESSAGE} : 숫자가 아닌 문자가 들어왔습니다. 구분자와 숫자의 자리를 유의해서 작성해주세요. 기본 구분자는 ,와 ;이며, 커스텀 구분자는 //과 \\n사이에 넣어 설정할 수 있습니다.`;
export const DEFAULT_DELIMITERS = `,;`;

export const DELIMITER_REGEX = new RegExp("^//.*\\\\n");
export const FRONT_PART_REGEX = "//";
export const BACK_PART_REGEX = "\\n";
