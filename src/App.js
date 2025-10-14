import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const USER_INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
    } catch (error) {
      MissionUtils.Console.print("[ERROR]");
    }
  }
}

export default App;
