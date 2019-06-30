import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroService } from './../hero.service';
import { Hero } from '../hero';
import { Observable, empty, of, never } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.heroService.getHero(+params.get('id'))
      )
    );
  }

}
