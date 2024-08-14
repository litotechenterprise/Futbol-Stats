// import { CsvFileReader } from "./classes/CsvFileReader";
// import { MatchReader } from "./MatchReader";

import { MatchReader } from "./classes/MatchReader";

const reader = new MatchReader("./src/data/football.csv");
reader.read();

console.log(reader.data);

// let manUnitedWins = 0;

// for (let match of reader.data) {
// }
