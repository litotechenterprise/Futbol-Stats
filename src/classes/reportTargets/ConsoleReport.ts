import { OutputTarget } from "../../types";

export class ConsoleReporter implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
