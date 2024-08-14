import { Analyzer, MatchData, MatchResults } from "../../types";

export class WinsAnalysis implements Analyzer {
  constructor(public team_name: string) {}

  run(matches: MatchData[]): string {
    let win_count = 0;

    for (let match of matches) {
      if (match[1] === this.team_name && match[5] === MatchResults.HomeWin) {
        win_count++;
      } else if (
        match[2] === this.team_name &&
        match[5] === MatchResults.AwayWin
      ) {
        win_count++;
      }
    }
    return `Team ${this.team_name} won ${win_count} games`;
  }
}
