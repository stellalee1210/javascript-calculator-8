import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { validator } from "./validator.js";
import { add } from "./calculator.js";
class App {
  async run() {
    try {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      MissionUtils.Console.print(USER_INPUT);
      const [IS_INPUT_VALID, VALIDATION_RESULT] = validator(USER_INPUT);
      if (IS_INPUT_VALID) {
        Console.print(add(VALIDATION_RESULT));
        return;
      }
      Console.print(VALIDATION_RESULT);
    } catch (error) {
      MissionUtils.Console.print("Error");
      //MissionUtils.Console.print(error);
    }
  }
}

export default App;
