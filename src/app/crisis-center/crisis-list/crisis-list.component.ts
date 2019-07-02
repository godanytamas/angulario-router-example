import { Component, OnInit } from '@angular/core';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  selectedCrisis: Crisis;

  crises$: Observable<Crisis[]>;

  constructor(private heroService: CrisisService) { }

  ngOnInit() {
    this.getCrises();
  }

  // onSelect(hero: Crisis): void {
  //   this.selectedCrisis = hero;
  // }

  getCrises(): void {
    this.crises$ = this.heroService.getCrises();
  }

}
