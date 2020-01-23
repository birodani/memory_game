import { Component, OnInit } from '@angular/core';
import {MemoGame} from '../memo-game';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('stateVisible', [
      state('true', style({transform: 'rotateY(0)'})),
      state('false', style({transform: 'rotateY(180deg)'})),
      transition('true => false', animate('500ms ease')),
      transition('false => true', animate('500ms ease'))
    ])
  ]
})
export class GameComponent implements OnInit {
  game: MemoGame;

  constructor() {
    this.game = new MemoGame();
  }

  ngOnInit() {
  }

}
