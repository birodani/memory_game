import {MemoCard} from './models/memo-card.model';
import {Subject} from 'rxjs';

export class MemoGame {

  board: MemoCard[][];
  gameOver = new Subject();
  selectedCards: MemoCard[] = [];

  constructor() {
    // 4x6
    const x = 2;
    const y = 2;

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

  canSelectMore() {
    return this.selectedCards.length < 2;
  }

  selectForCheck(card: MemoCard) {
    card.flip();
    this.selectedCards.push(card);
  }

  selectCard(row: number, column: number) {
    const card = this.board[row][column];

    if (card.found) {
      return;
    }

    if (this.canSelectMore()) {
      this.selectForCheck(card);
    } else {
      this.resetSelectedCards();
      this.selectForCheck(card);
    }

    this.checkState();
  }

  checkState() {
    if (!this.canSelectMore()) {
      if (this.selectedCards[0].value === this.selectedCards[1].value) {
        this.selectedCards[0].found = true;
        this.selectedCards[1].found = true;
        this.resetSelectedCards();

        if (this.board.every(row => row.every(card => card.found))) {
          this.gameOver.next();
          this.gameOver.complete();
        }
      }
    }
  }

  private resetSelectedCards() {
    this.selectedCards.forEach(card => card.found || card.flip());
    this.selectedCards = [];
  }
}
