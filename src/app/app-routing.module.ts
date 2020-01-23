import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},   // catch and redirect to home, if url not exists
  {path: 'home', component: HomeComponent},
  {path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule)}   // add lazy load modules
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
