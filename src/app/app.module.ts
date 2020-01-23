import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {GameModule} from './game/game.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GameModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
