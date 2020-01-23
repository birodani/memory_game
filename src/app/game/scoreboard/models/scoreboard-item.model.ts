export class ScoreboardItem {
  name: string;
  timestamp: number;
  time: number;

  constructor(name: string, timestamp: number, time: number) {
    this.name = name;
    this.timestamp = timestamp;
    this.time = time;
  }
}
