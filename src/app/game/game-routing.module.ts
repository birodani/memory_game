import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GameComponent} from './game/game.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {AuthGuard} from '../auth-guard.service';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: GameComponent },
  { path: 'scoreboard', component: ScoreboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
