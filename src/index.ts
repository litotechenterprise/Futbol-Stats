import { Summary } from "./classes/Summary";
import { MatchReader } from "./classes/readers/MatchReader";

const reader = new MatchReader("./src/data/football.csv");
reader.read();

const summary = Summary.winsAnalysisWithHTMLReport("Man United");
summary.buildAndPrintReport(reader.data);
