import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { validator } from "./validator.js";
import { add } from "./calculator.js";
import {
  DEFAULT_ERROR_MESSAGE,
  ERROR_INVALID_INPUT_BLANK,
} from "./constants.js";
class App {
  async run() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const [IS_INPUT_VALID, VALIDATION_RESULT] = validator(userInput);
      if (IS_INPUT_VALID)
        return Console.print(`결과 : ${add(VALIDATION_RESULT)}`);
    } catch (error) {
      if (error.message === ERROR_INVALID_INPUT_BLANK) {
        Console.print("0");
        return;
      }
      throw Error(
        error.message ||
          `${DEFAULT_ERROR_MESSAGE} : 알 수 없는 에러입니다. 입출력 형식을 지켜서 다시 입력해주십시오.\n 기본 구분자 : , ;\n 커스텀 구분자 : //[구분자]\\n`
      );
    }
  }
}

export default App;
