import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule { }
