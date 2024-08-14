import { CsvFileReader } from "./CsvFileReader";
import { MatchData, MatchResults } from "../../types";
import { parseDate } from "../../utils";

export class MatchReader extends CsvFileReader<MatchData> {
  processRow(row: string[]): MatchData {
    return [
      parseDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
