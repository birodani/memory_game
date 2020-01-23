import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game/game.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {CardComponent} from './card/card.component';
import {GameRoutingModule} from './game-routing.module';
import {NgxListLibModule, NgxListLibIntl} from 'ngx-list-lib';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material';


function NgxListLibScoreBoard() {
  const intl = new NgxListLibIntl();
  intl.listTitle = 'ScoreBoard';
  intl.listItemHeader = (i) => `${i + 1}. hellyezett`;
  return intl;
}

@NgModule({
  declarations: [GameComponent, ScoreboardComponent, CardComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    NgxListLibModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    {provide: NgxListLibIntl, useFactory: NgxListLibScoreBoard}
  ]
})
export class GameModule { }
