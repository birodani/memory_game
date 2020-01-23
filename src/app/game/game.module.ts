import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game/game.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {CardComponent} from './card/card.component';
import {GameRoutingModule} from './game-routing.module';
import {NgxListLibModule, NgxListLibIntl} from 'ngx-list-lib';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ScoreboardService} from './scoreboard/scoreboard.service';
import { TimePipe } from './time.pipe';


function NgxListLibScoreBoard() {
  const intl = new NgxListLibIntl();
  intl.listTitle = 'ScoreBoard';
  intl.listItemHeader = (i) => `${i + 1}. helyezett`;
  return intl;
}

@NgModule({
  declarations: [GameComponent, ScoreboardComponent, CardComponent, TimePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    GameRoutingModule,
    NgxListLibModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    {provide: NgxListLibIntl, useFactory: NgxListLibScoreBoard},
    ScoreboardService
  ]
})
export class GameModule { }
