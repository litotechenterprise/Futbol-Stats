import { Summary } from "./classes/Summary";
import { WinsAnalysis } from "./classes/analyzers/WinsAnalysis";
import { MatchReader } from "./classes/readers/MatchReader";
import { ConsoleReporter } from "./classes/reportTargets/ConsoleReport";

const reader = new MatchReader("./src/data/football.csv");
reader.read();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReporter()
);

summary.buildAndPrintReport(reader.data);
