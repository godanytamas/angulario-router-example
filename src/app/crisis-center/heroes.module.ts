import { HeroService } from './crisis.service';
import { HeroListComponent } from './crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './crisises-routing.module';
import { HeroDetailComponent } from './crisis-detail/crisis-detail.component';

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
