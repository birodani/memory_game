import { Component, OnInit } from '@angular/core';
import {ScoreboardService} from './scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor(public scoreboardService: ScoreboardService) { }
  $itemObs;
  ngOnInit() {
    this.$itemObs = this.scoreboardService.getScoreboard();
  }

}
