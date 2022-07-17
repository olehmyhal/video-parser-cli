import { FfmpegExecutor } from "./commands/ffmpeg/ffmpeg.executor";
import { ConsoleLoggerService } from "./out/console-logger/console-logger.service";

export class App {
  async run() {
    new FfmpegExecutor(ConsoleLoggerService.getInstance()).execute();
  }
}

const app = new App();
app.run();
