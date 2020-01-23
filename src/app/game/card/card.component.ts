import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MemoCard} from '../models/memo-card.model';
import {MemoGame} from '../memo-game';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('stateVisible', [
      state('true', style({transform: 'rotateY(0)'})),
      state('false', style({transform: 'rotateY(180deg)'})),
      transition('true => false', animate('500ms ease')),
      transition('false => true', animate('500ms ease'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input()
  card: MemoCard;

  @Output()
  cardSelcted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
