import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { validator } from "./validator.js";
import { add } from "./calculator.js";
import { ERROR_MESSAGE } from "./constants.js";
class App {
  async run() {
    try {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const [IS_INPUT_VALID, VALIDATION_RESULT] = validator(USER_INPUT);
      if (IS_INPUT_VALID)
        return Console.print(`결과 : ${add(VALIDATION_RESULT)}`);
    } catch (error) {
      throw Error(ERROR_MESSAGE);
    }
  }
}

export default App;
