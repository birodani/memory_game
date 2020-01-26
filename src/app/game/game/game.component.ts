import {Component, OnDestroy, OnInit} from '@angular/core';
import {MemoGame} from '../memo-game';
import {ScoreboardService} from '../scoreboard/scoreboard.service';
import {ScoreboardItem} from '../scoreboard/models/scoreboard-item.model';
import {CredentialService} from '../../credential.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  game: MemoGame;
  intervalId = undefined;
  time = 0;

  constructor(private  scoreBoardService: ScoreboardService, private credentialService: CredentialService, private router: Router) {
    this.game = new MemoGame();
  }

  ngOnInit() {
    this.startTimer();

    this.game.gameOver
      .subscribe(x => {
        this.stopTimer();
        this.scoreBoardService.saveScoreboard(new ScoreboardItem(this.credentialService.getUser().nickname, new Date().getTime(), this.time))
          .subscribe(() => this.router.navigateByUrl('/game/scoreboard'));
      });
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      this.stopTimer();
    }
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.time++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }


}
