import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { CardComponent } from './card/card.component';
import {GameRoutingModule} from './game-routing.module';



@NgModule({
  declarations: [GameComponent, ScoreboardComponent, CardComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
