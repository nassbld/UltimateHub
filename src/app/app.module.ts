import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomPipe } from './shared/custom.pipe';
import { CustomDirective } from './shared/custom.directive';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PlayerListComponent,
    CustomPipe,
    CustomDirective,
    PlayerListComponent,
    PlayerDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
