import { Analyzer, MatchData, OutputTarget } from "../types";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HTMLReporter } from "./reportTargets/HTMLReports";

export class Summary {
  static winsAnalysisWithHTMLReport(team_name: string): Summary {
    return new Summary(new WinsAnalysis(team_name), new HTMLReporter());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
