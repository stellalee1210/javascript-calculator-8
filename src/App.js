import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { validator } from "./validator.js";
import { add } from "./calculator.js";
import {
  DEFAULT_ERROR_MESSAGE,
  BLANK_INPUT_ERROR_MESSAGE,
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
      if (error.message === BLANK_INPUT_ERROR_MESSAGE) {
        Console.print("0");
        return;
      }
      throw Error(DEFAULT_ERROR_MESSAGE);
    }
  }
}

export default App;
