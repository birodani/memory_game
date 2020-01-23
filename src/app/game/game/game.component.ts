import {Component, OnInit} from '@angular/core';
import {MemoGame} from '../memo-game';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ScoreboardService} from '../scoreboard/scoreboard.service';
import {ScoreboardItem} from '../scoreboard/models/scoreboard-item.model';
import {CredentialService} from '../../credential.service';
import {Router} from '@angular/router';

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

  constructor(private  scoreBoardService: ScoreboardService, private credentialService: CredentialService, private router: Router) {
    this.game = new MemoGame();
  }

  ngOnInit() {
    this.game.gameOver
      .subscribe(x => this.scoreBoardService.saveScoreboard(new ScoreboardItem(this.credentialService.getUser().nickname, new Date().getTime(), 0))
        .subscribe(() => this.router.navigateByUrl('/game/scoreboard')));
  }

}
