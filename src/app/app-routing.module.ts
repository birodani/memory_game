import {NgModule} from '@angular/core';
import {Routes, RouterModule, NoPreloading} from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},   // catch and redirect to home, if url not exists
  {path: 'home', component: HomeComponent},
  {path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule)}   // add lazy load modules
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
{preloadingStrategy: NoPreloading,    // default: no, PreloadAllModules --> actual is loaded, then he pull other modules in the background
        scrollPositionRestoration: 'top'      // after navigation scroll position, enable--> where it was last time, top--> set to 0
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
