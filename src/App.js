import { MissionUtils } from "@woowacourse/mission-utils";
import { validator } from "./validator.js";

class App {
  async run() {
    try {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const [IS_INPUT_VALID, VALIDATION_RESULT] = validator(USER_INPUT);
      if (IS_INPUT_VALID) {
        Console.Print(calculate(VALIDATION_RESULT));
        return;
      }
      Console.Print(VALIDATION_RESULT);
    } catch (error) {
      MissionUtils.Console.print("[ERROR]");
    }
  }
}

export default App;
