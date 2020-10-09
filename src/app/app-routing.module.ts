import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'computer',
  component: BoardgameComponent
}, {
  path: 'home',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }