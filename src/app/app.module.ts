import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardgameComponent } from './boardgame/boardgame.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardgameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
