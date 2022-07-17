export interface IConsoleLogger {
  log(...args: any[]): void;
  error(...args: any[]): void;
  end(): void;
}
