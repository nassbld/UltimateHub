import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {PlayerListComponent} from "./players/player-list/player-list.component";
import {PlayerDetailComponent} from "./players/player-detail/player-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Add this
  { path: 'login', component: LoginComponent }, // Add this
  { path: 'register', component: RegisterComponent }, // Add this
  { path: 'player-list', component: PlayerListComponent }, // Add this
  { path: 'player-details', component: PlayerDetailComponent }, // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
