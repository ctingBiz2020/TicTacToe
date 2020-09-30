import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardgameComponent } from './boardgame/boardgame.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: BoardgameComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }