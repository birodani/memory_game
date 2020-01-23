import { Component, OnInit } from '@angular/core';
import {MemoGame} from '../memo-game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: MemoGame;

  constructor() {
    this.game = new MemoGame();
  }

  ngOnInit() {
  }

}
