import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';

import { HeroesModule } from './heroes/heroes.module';
import { AuthModule } from './auth/auth.module';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './auth/login/login.component';

import { AuthService } from './auth/auth.service';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    SelectivePreloadingStrategyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
