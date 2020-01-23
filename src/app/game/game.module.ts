import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { CardComponent } from './card/card.component';
import {GameRoutingModule} from './game-routing.module';
import { NgxListLibModule} from 'ngx-list-lib';



@NgModule({
  declarations: [GameComponent, ScoreboardComponent, CardComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    NgxListLibModule
  ]
})
export class GameModule { }
