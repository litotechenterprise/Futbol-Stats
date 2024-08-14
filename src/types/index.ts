export enum MatchResults {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];

export interface DataReader {
  read(): void;
  data: string[][];
}
