import {MemoCard} from './models/memo-card.model';

export class MemoGame {

  board: MemoCard[][];

  constructor() {
    // 4x6
    const x = 6;
    const y = 4;

    // create new card deck
    const deck = [];
    for (let i = 0; i < y * x / 2; i++) {
      deck.push(new MemoCard(`C${i + 1}`));
      deck.push(new MemoCard(`C${i + 1}`));
    }
    // shuffle
    deck.sort(() => Math.random() - 0.5);

    // board
    this.board = [];
    for (let j = 0; j < y; j++) {
      this.board[j] = [];
      for (let i = 0; i < x; i++) {
        this.board[j][i] = deck[j * x + i];
      }
    }
  }

  selectCard(row: number, column: number) {
    this.board[row][column].visible = !this.board[row][column].visible;
  }
}
