import { IConsoleLogger } from "./console-logger.interface";

export class ConsoleLoggerService implements IConsoleLogger {
  private static logger: ConsoleLoggerService;
  public static getInstance() {
    if (!ConsoleLoggerService.logger) {
      this.logger = new ConsoleLoggerService();
    }

    return ConsoleLoggerService.logger;
  }

  log(...args: any[]): void {
    console.log(...args);
  }

  error(...args: any[]): void {
    console.log(...args);
  }

  end(): void {
    console.log("End");
  }
}
